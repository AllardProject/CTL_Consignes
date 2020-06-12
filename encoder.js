var Gpio = require('onoff').Gpio
   ,button1 = new Gpio(23, 'in', 'both') //Port A qui represente la droite de l'encodeur
   ,button2 = new Gpio(18, 'in', 'both') //Port B qui represente la gauche de l'encodeur
   ,a = 0 
   ,b = 0 
   ,v = 0 // Valeur qui va etre incrémenté ou décrémenté

function exit() {
  button1.unexport();
  process.exit();
}


button1.watch(function (err, value) {
  if (err) {
    throw err;
  }
  a = value;
});


button2.watch(function (err, value) {
  if (err) {
    throw err;
  }
    b = value;

   // Permet de savoir si le bouton va a droite ou a gauche  
    if (a == 1 && b == 1) {
      console.log(v++);
    } else if (a==1 && b==0) {
        console.log(v--);
    }
});

process.on('SIGINT', exit);
