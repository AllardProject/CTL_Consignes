
var five = require("johnny-five");
const Raspi = require('raspi-io').RaspiIO;
var board = new five.Board({
  io: new Raspi()
});

board.on("ready", function() {

  var lcd = new five.LCD({
    controller: "PCF8574T"
  });

  console.log(lcd);


  lcd.print("Bonjour");
  lcd.cursor(3, 0);

});
