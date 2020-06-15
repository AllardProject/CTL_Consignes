const Gpio = require('onoff').Gpio;
const button = new Gpio(12, 'in', 'both');


button.watch((err, value) => {
    console.log("Clée");
    if (err) {
        console.log("Erreur clée");
    }
});
process.on('SIGINT',_ =>{
    button.unexport();
});
