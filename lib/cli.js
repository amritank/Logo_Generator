const inquirer = require('inquirer');
const Circle = require("../lib/circle.js")
const Square = require("../lib/square.js")
const Triangle = require("../lib/triangle.js")
const { writeFile } = require('fs/promises');

const questions = [
    {
        type: "input",
        name: "logotitle",
        message: "Enter the 3 letter title for the logo"
    },
    {
        type: "input",
        name: "titlecolor",
        message: "Enter the color keyword for the title."
    },
    {
        type: "list",
        name: "logoshape",
        message: "Choose the shape for your logo from the below options.",
        choices: ["circle", "square", "triangle"]
    },
    {
        type: "input",
        name: "shapecolor",
        message: "Enter the color keyword for the shape."
    },
];

class Cli {
    constructor() { }
    run() {
        return inquirer
            .prompt(questions)
            .then((data) => {
                console.log(data);
                let obj;
                switch (data.logoshape) {
                    case "circle":
                        obj = new Circle(data.logotitle, data.titlecolor, data.shapecolor);
                        break;
                    case "triangle":
                        obj = new Triangle(data.logotitle, data.titlecolor, data.shapecolor);
                        break;
                    case "square":
                        obj = new Square(data.logotitle, data.titlecolor, data.shapecolor);
                        break;
                    default:
                        throw new Error("Invalid shape selected");
                        break;
                };
                const svgText = obj.render();
                console.log(svgText);
                writeFile(`./dist/${data.logoshape}_logo.svg`, svgText);
            })
            .catch((err) => { console.log(err) });
    }
}

module.exports = Cli;