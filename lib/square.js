const Shape = require("../lib/shape.js")

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return ` 
        <svg width = "300" height = "200" xmlns = "http://www.w3.org/2000/svg" >
        <polygon points="60, 20, 230, 20, 230, 180, 60, 180" fill="${this.shapeColor}" stroke="black" />
        <text x="143" y="110" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg >
        `
    }
}

module.exports = Square