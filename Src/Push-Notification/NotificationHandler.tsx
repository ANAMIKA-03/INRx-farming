import messaging from '@react-native-firebase/messaging';
import notifee, {EventType} from '@notifee/react-native';
import {useEffect} from 'react';
// Note that an async function or a function that returns a Promise
// is required for both subscribers.

async function showNotification(message: any) {
  // Create a channel (required for Android)
  //   await notifee.cancelAllNotifications();
  console.log('Your message :showNotification():', message);
  const notificationId = Math.floor(Math.random() * 10000) + 'INRX-Farming';

  const channelId = await notifee.createChannel({
    id: notificationId,
    name: 'Default Channel',
  });

  // Display a notification
  await notifee.displayNotification({
    id: notificationId,
    title: 'Notification Title',
    body: 'Main body content of the notification',
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
  }

  useEffect(() => {
    onAppBootstrap();
    onDisplayNotification();
  }, []);

  useEffect(() => {
    const unsubscribe = notifee.onForegroundEvent(({type, detail}) => {
      const {notification, pressAction} = detail;

      console.log('onForegroundEvent,');
      switch (type) {
        case EventType.DISMISSED:
          console.log('User dismissed notification', notification);
          break;
        case EventType.PRESS:
          console.log('User pressed notification', notification);
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
          console.log('User dismissed notification', notification);
          break;
        case EventType.PRESS:
          console.log('User pressed notification', notification);
          break;
      }
    });
  }, []);

  return null;
};

export async function onAppBootstrap() {
  // Register the device with FCM
  await messaging().registerDeviceForRemoteMessages();

  // Get the token
  const fcmtoken = await messaging().getToken();

  console.log('FCM Token', fcmtoken);
  // Save the token
  // await postToApi('/users/1234/tokens', { token });
}

export async function onMessageReceived(message: any) {
  // Do something
  console.log('Your message :onMessageReceived():', message);
  showNotification(message);
}

messaging().onMessage(onMessageReceived);
messaging().setBackgroundMessageHandler(onMessageReceived);
