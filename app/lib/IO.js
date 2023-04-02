const fs = require("fs");
const dir = "output";
const file = "logo.svg";

function StandardOut(data) {
    if(!fs.existsSync(dir)) fs.mkdirSync(dir);

    fs.writeFileSync(dir+"/"+file, data);
};

module.exports = {
    StandardOut: StandardOut
}

