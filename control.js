var raspi = require('raspi-io');
var five = require('johnny-five');
var board = new five.Board({
    io: new raspi()
});​
// Light
​
board.on('ready', function() {
            var led = new five.Led([3, 12]);
            // Motor FUD
            var FUD = new five.Motor([3, 12]);
            //Motor BUD
            var BUD = new five.Motor([3, 12]);
            //Motor FR
            var FR = new five.Motor([3, 12]);
            //Motor FL
            var FL = new five.Motor([3, 12]);
            //Motor BR
            var BR = new five.Motor([3, 12]);
            //Motor BL
            var BL = new five.Motor([3, 12]);
            process.stdin.on("keypress", function(ch, key) {​ //FORWARD
                        if (key.name == ‘w ') {
      FR.forward()
      FL.forward()
      BR.backward()
      BL.backward()
      //return .toggle();
      
    };
    ​  //BACKWARDS
    if (key.name == ‘s') {
                            FR.backward()
                            FL.backward()
                            BR.forward()
                            BL.forward()
                                //return .toggle();
                        };
                        //RIGHT
                        if (key.name == ‘d ') {
      FR.backward()
      FL.forward()
      BR.backward()
      BL.forward()
      //return .toggle();
      
    };
    
    //LEFT
    if (key.name == ‘a') {
                            FR.forward()
                            FL.backward()
                            BR.forward()
                            BL.backward()
                                //return .toggle();
                        };
                        //UP
                        if (key.name == ‘up ') {
     FUD.forward()
     BUD.forward()
      //return .toggle();
      
    };
   
     //DOWN
    if (key.name == ‘up') {
                            FUD.backward()
                            BUD.backward()
                                //return .toggle();
                                //LIGHT
                            if (key.name == ‘e ') {
      led.toggle()
      //return .toggle();
    }
  });
});
