// Get the notification button element
const notificationBtn = document.getElementById('notification-btn');

// Add a click event listener to the button
notificationBtn.addEventListener('click', function() {
  // Check if the browser supports notifications
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications.');
    return;
  }

  // Request permission to show notifications
  Notification.requestPermission()
    .then(function(permission) {
      if (permission === 'granted') {
        // Create a notification
        navigator.serviceWorker.ready
          .then(function(registration) {
            registration.showNotification('time is over', {
              body: 'time is over',
              icon: 'path/to/icon.png'
            });
          });
      }
    });
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
});
