const Shape = require("../lib/shape.js")

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return ` 
        <svg width = "300" height = "200" xmlns = "http://www.w3.org/2000/svg" >
        <polygon points="150,20 20,180 280,180" fill="${this.shapeColor}" stroke="black" />
        <text x="150" y="133" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg >
        `
    }
}

module.exports = Triangle