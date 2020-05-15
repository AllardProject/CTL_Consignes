const Gpio = require('onoff').Gpio;
const buttonA = new Gpio(23, 'in', 'falling');
const buttonB = new Gpio(18, 'in', 'falling');
const buttonC = new Gpio(24, 'in', 'both');

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