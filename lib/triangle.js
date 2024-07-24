const Shape = require("../lib/shape.js")

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return ` 
        <svg width = "300" height = "200" xmlns = "http://www.w3.org/2000/svg" >
        <polygon points="120,30 40,180 200,180" fill="${this.shapeColor}" stroke="black" />
        <text x="122" y="140" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg >
        `
    }
}

module.exports = Triangle