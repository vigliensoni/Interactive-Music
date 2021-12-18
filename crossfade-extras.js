let screenConsole = document.getElementById('screenConsole')


function handleMotionEvent(event) {
    console.log(event)
    // let x = event.accelerationIncludingGravity.x;
    // let y = event.accelerationIncludingGravity.x;
    // let z = event.accelerationIncludingGravity.x;
    screenConsole.innerHTML = event.acceleration.x + ' m/s2'
    
}

function handleOrientation(event) {
    console.log(event);
    // screenConsole.innerHTML = "\nAlpha: " + parseInt(event.alpha)
    //                         + "\nBeta: " + parseInt(event.beta)
    //                         + "\nGamma: " + parseInt(event.gamma)
}

if (window.DeviceMotionEvent) {
    console.log("DeviceMotion On!")
    window.addEventListener('devicemotion', handleMotionEvent, true)
  } else {
      console.log("No DeviceMotionEvent")
  }
  


window.addEventListener("deviceorientation", handleOrientation, true);