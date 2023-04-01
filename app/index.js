const p = require("inquirer");
const svg = require("./lib/SVG");

const ColorKeyWords = [
    { name: "Black", value: "#000000"},
    { name: "White", value: "#FFFFFF"},
    { name: "Red", value: "#FF0000"},
    { name: "Orange", value: "#ffa500"},
    { name: "Yellow", value: "#FFFF00"},
    { name: "Green", value: "#008000"},
    { name: "Blue", value: "#0000FF"},
    { name: "Indigo", value: "#4b0082"},
    { name: "Violet", value: "#ee82ee"},
    { name: "Custom", value: "Custom"}
]

p
    .prompt(
        [{
            name: "text",
            message: "What is the logo text?",
            type: "input",
            validate: svg.IsLogoTextValid
        },{
            name: "textColor",
            message: "What is the logo text's color?",
            type: "list",
            choices: ColorKeyWords
        },{
            name: "textColorCustom",
            message: "Please Enter a Hex Color Value",
            type: "input",
            when: (ans) => {
                return ans.textColor === "Custom";
            },
            validate: svg.IsValidHexColor
        },{
            name: "shape",
            message: "What is the logo shape",
            type: "list",
            choices: ["Triangle", "Square", "Circle"]
        },{
            name: "shapeColor",
            message: "What is the logo background color?",
            type: "list",
            choices: ColorKeyWords
        },{
            name: "shapeColorCustom",
            message: "Please Enter a Hex Color Value",
            type: "input",
            when: (ans) => {
                return ans.shapeColor === "Custom";
            },
            validate: svg.IsValidHexColor
        },]
    )
    .then((ans) => {
        console.log(`User Requested a logo with text: ${ans.text} that is ${ans.textColorCustom ? ans.textColorCustom : ans.textColor} that is in a ${ans.shape} that is ${ans.shapeColorCustom ? ans.shapeColorCustom : ans.shapeColor}`)
    });

