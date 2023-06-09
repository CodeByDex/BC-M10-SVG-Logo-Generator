/********************************************************
 * Required Modules
 ********************************************************/
const p = require("inquirer");
const svg = require("./lib/SVG");
const s = require("./lib/Shapes");
const io = require("./lib/IO");

/*******************************************************
 * Constants
 *******************************************************/
//Total SVG Size
const width = 300;
const height = 200;
//Adjust shape size relative to SVG Size
const shapeShrink = 0.9

const ColorKeyWords = [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Red", value: "#FF0000" },
    { name: "Orange", value: "#ffa500" },
    { name: "Yellow", value: "#FFFF00" },
    { name: "Green", value: "#008000" },
    { name: "Blue", value: "#0000FF" },
    { name: "Indigo", value: "#4b0082" },
    { name: "Violet", value: "#ee82ee" },
    { name: "Custom", value: "Custom" }
]

/*****************************************************
 * Program Executions
 *****************************************************/
p
    .prompt(
        [{
            name: "text",
            message: "What is the logo text?",
            type: "input",
            validate: svg.IsLogoTextValid
        }, {
            name: "textColor",
            message: "What is the logo text's color?",
            type: "list",
            choices: ColorKeyWords
        }, {
            name: "textColorCustom",
            message: "Please Enter a Hex Color Value",
            type: "input",
            when: (ans) => {
                return ans.textColor === "Custom";
            },
            validate: svg.IsValidHexColor
        }, {
            name: "shape",
            message: "What is the logo shape",
            type: "list",
            choices: ["Triangle", "Square", "Circle"]
        }, {
            name: "shapeColor",
            message: "What is the logo background color?",
            type: "list",
            choices: ColorKeyWords
        }, {
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
        let reqShape = GenerateShape(ans.shape, ans.shapeColorCustom ? ans.shapeColorCustom : ans.shapeColor, ans.text, ans.textColorCustom ? ans.textColorCustom : ans.textColor);
        let svgContnet = svg.RenderSVG(height, width, reqShape.render(width / 2, height / 2))
        // console.log(reqShape.render());
        io.StandardOut(svgContnet)
        console.log("Generated logo.svg");
    });

/************************************************************
 * Methods
 ************************************************************/
/**
 * Method that will generate a shape with the specified properties
 * @param {string} shape //shape type to create
 * @param {string} color //Hex value
 * @param {string} text 
 * @param {string} textColor //Hex Value
 * @returns an instances of a shape object
 */
function GenerateShape(shape, color, text, textColor) {
    shape = shape.toLowerCase();
    let newShape = null;

    if (shape === "square") {
        newShape = new s.Square(text, textColor, color, height * shapeShrink, width * shapeShrink);
    } else if (shape === "triangle") {
        newShape = new s.Triangle(text, textColor, color, height * shapeShrink, width * shapeShrink);
    } else if (shape === "circle") {
        newShape = new s.Circle(text, textColor, color, height / 2 * shapeShrink);
    } else {
        console.log(`${shape} is not a valid shape`);
    }

    return newShape;
}
