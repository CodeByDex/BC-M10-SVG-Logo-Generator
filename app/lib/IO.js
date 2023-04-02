/**
 * Swap this module out for different output methods.
 * Expected to implement a function StandardOut(data) that accepts a string of data to be output to the desired location. 
 */
const fs = require("fs");
const dir = "output";
const file = "logo.svg";

function StandardOut(data) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    fs.writeFileSync(dir + "/" + file, data);
};

module.exports = {
    StandardOut: StandardOut
}

