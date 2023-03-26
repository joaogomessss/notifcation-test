
// check if the browser supports notifications
if ("Notification" in window) {
    // request permission from the user to show notifications
    Notification.requestPermission().then(function (permission) {
      // if the user grants permission
      if (permission === "granted") {
        console.log("Notification permission granted");
        // create a notification object
        var notification = new Notification("Button Clicked!", {
          body: "You clicked the button.",
        });
      }
    });
  }
  
  // add a click event listener to the button
  var button = document.getElementById("myButton");
  button.addEventListener("click", function () {
    console.log("Button clicked");
    // show the notification when the button is clicked
    if ("Notification" in window) {
      // create a notification object
      var notification = new Notification("Button Clicked!", {
        body: "You clicked the button.",
      });
    }
  });
  