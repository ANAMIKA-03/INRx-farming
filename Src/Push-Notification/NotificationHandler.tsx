import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import {useEffect} from 'react';

async function showNotification(message: any) {
  // Create a channel (required for Android)
  //   await notifee.cancelAllNotifications();
  console.log('Your message :showNotification():');
  const notificationId = Math.floor(Math.random() * 10000) + 'INRX-Farming';

  const channelId = await notifee.createChannel({
    id: notificationId,
    name: 'Default Channel',
    importance: AndroidImportance.HIGH,
  });

  // Display a notification
  await notifee.displayNotification({
    id: notificationId,
    title: message?.notification?.title,
    body: message?.notification?.body,
    android: {
      channelId,
      //   smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default',
      },
    },
  });
}

export const NotificationListener = () => {
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();
    const ispermit = await messaging().hasPermission();
    if (!ispermit) {
      await messaging().requestPermission();
    }
  }

  useEffect(() => {
    onAppBootstrap(null);
    onDisplayNotification();
  }, []);

  useEffect(() => {
    const unsubscribe = notifee.onForegroundEvent(({type, detail}) => {
      const {notification, pressAction} = detail;

      console.log('onForegroundEvent,');
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification');
          break;
        case EventType.PRESS:
          console.log('User pressed notification');
          break;
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    notifee.onBackgroundEvent(async ({type, detail}) => {
      const {notification, pressAction} = detail;
      // Check if the user pressed the "Mark as read" action
      console.log('onBackgroundEvent,');
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification');
          break;
        case EventType.PRESS:
          console.log('User pressed notification');
          break;
      }
    });
  }, []);

  return null;
};

export async function onAppBootstrap(cb:any) {
  // Register the device with FCM
  await messaging().registerDeviceForRemoteMessages();

  // Get the token
  const fcmtoken = await messaging().getToken();
  if(cb){
    cb(fcmtoken);
  }
  // console.log('FCM Token', fcmtoken);
  // Save the token
  // await postToApi('/users/1234/tokens', { token });
}

export async function onMessageReceived(message: any) {
  // Do something
  console.log('Your message :onMessageReceived():', message?.notification);
  showNotification(message);
}

messaging().onMessage(onMessageReceived); 
messaging().setBackgroundMessageHandler(onMessageReceived);
messaging()
  .getInitialNotification()
  .then(res => {
    console.log(res, 'initial notifee');
  });