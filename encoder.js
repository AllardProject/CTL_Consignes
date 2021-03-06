var Gpio = require('onoff').Gpio
   ,button1 = new Gpio(23, 'in', 'both') //blue button
   ,button2 = new Gpio(18, 'in', 'both') //red button
   ,buttonC = new Gpio(24, 'in', 'rising', {debounceTimeout: 10})
   ,a = 0 //a value GPIO 17
   ,b = 0 //b value GPIO 18
     ,v = 0 //value to increment/decrement

function exit() {
  button1.unexport();
  process.exit();
}

//Watch for hardware interrupt of switch 1
button1.watch(function (err, value) {
  if (err) {
    throw err;
  }
  a = value;
});

//Watch for hardware interrupt of switch 2
button2.watch(function (err, value) {
  if (err) {
    throw err;
  }
    b = value;

    //only evaluate if a = 1
    if (a == 1 && b == 1) {
      console.log(v++);
    } else if (a==1 && b==0) {
        console.log(v--);
    }
});
buttonC.watch((err, value) => {
  console.log("Bouton C");
  if (err) {
      console.log("Erreur Bouton C");
  }
});
process.on('SIGINT', _ =>{
buttonC.unexport();
});
