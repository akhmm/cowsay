const userInfo = require('./information.js');

console.log();

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello I'm ${userInfo.name} from ${userInfo.campus} campus!`,
    e : "oO",
    T : "U "
}));
