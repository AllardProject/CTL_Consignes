const Gpio = require('onoff').Gpio;
//const Encoder = new rotaryEncoder(23, 18, 'in', 'rising', {debounceTimeout: 10});
const buttonA = new Gpio(23, 'in', 'rising', {debounceTimeout: 10});
const buttonB = new Gpio(18, 'in', 'rising', {debounceTimeout: 10});
const buttonC = new Gpio(24, 'in', 'rising', {debounceTimeout: 10});


buttonA.watch((err, value) => {
    console.log("Bouton A");
    if (err) {
        console.log("Erreur Bouton A");
    }
});

buttonB.watch((err, value) => {
    console.log("Bouton B");
    if (err) {
        console.log("Erreur Bouton B");
    }
});

buttonC.watch((err, value) => {
    console.log("Bouton C");
    if (err) {
        console.log("Erreur Bouton C");
    }
});
process.on('SIGINT',_ =>{
    buttonA.unexport();
    buttonB.unexport();
    buttonC.unexport();
});
