const Shape = require("../lib/shape.js")

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return ` 
        <svg width = "300" height = "200" xmlns = "http://www.w3.org/2000/svg" >
        <polygon points="30, 20, 170, 20, 170, 160, 30, 160" fill="${this.shapeColor}" stroke="black" />
        <text x="100" y="105" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg >
        `
    }
}

module.exports = Square