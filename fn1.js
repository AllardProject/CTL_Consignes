//LCD
const Raspi = require('raspi-io').RaspiIO;
var five = require("johnny-five");

//Afficheur LCD
var board = new five.Board({
  io: new Raspi()
});
board.on("ready", function() {

    var lcd = new five.LCD({
     controller: "PCF8574T",
     rows: 4,
     cols: 20
    });
    function Fonction1(){
    button = new five.Button('P1-18');

      button.on("up", function() {
        lcd.clear();
        lcd.cursor(0,0).print("Acces libre");
        lcd.cursor(1,0).print("au Casier 1");
        lcd.cursor(2,0).print("Poser votre Index");
        lcd.cursor(3,0).print("Pour la fermeture");
        button.on("up", function() {
            lcd.clear();
            lcd.cursor(0,0).print("Casier 1");
            lcd.cursor(1,0).print("Verrouille");  
        });
      });
     lcd.cursor(1,0).print("Veuillez poser votre");
     lcd.cursor(2,0).print("index sur le capteur");
    }
    Fonction1();
});

