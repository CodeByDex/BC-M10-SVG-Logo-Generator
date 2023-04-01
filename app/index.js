const p = require("inquirer");

p
    .prompt(
        [{
            name: "text",
            message: "What is the logo text?",
            type: "input"
        },{
            name: "textColor",
            message: "What is the logo text's color?",
            type: "list",
            choices: ["White", "Black", "Custom"]
        },{
            name: "textColorCustom",
            message: "Please Enter a Hex Color Value",
            type: "input",
            when: (ans) => {
                return ans.textColor === "Custom";
            }
        },{
            name: "shape",
            message: "What is the logo shape",
            type: "list",
            choices: ["Triangle", "Square", "Circle"]
        },{
            name: "shapeColor",
            message: "What is the logo background color?",
            type: "list",
            choices: ["White", "Black", "Custom"]
        },{
            name: "shapeColorCustom",
            message: "Please Enter a Hex Color Value",
            type: "input",
            when: (ans) => {
                return ans.shapeColor === "Custom";
            }
        },]
    )
    .then((ans) => {
        console.log(`User Requested a logo with text: ${ans.text} that is ${ans.textColorCustom ? ans.textColorCustom : ans.textColor} that is in a ${ans.shape} that is ${ans.shapeColorCustom ? ans.shapeColorCustom : ans.shapeColor}`)
    });
