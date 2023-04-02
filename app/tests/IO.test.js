const io = require("../lib/IO");
const fs = require("fs");
const dir = "output";
const file = "logo.svg";

describe("IO Test Cases", () => {
    it("Validates file creates", () => {
        const ranNum = Math.random();

        io.StandardOut(ranNum.toString());

        fs.readFile(dir + "/" + file, "utf8", (err, data) => {
            expect(data).toEqual(ranNum.toString());
        })
    })
})