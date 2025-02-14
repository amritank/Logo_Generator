const Shape = require("../lib/shape.js")

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return ` 
        <svg version="1.1" width="300" height="200" xmlns = "http://www.w3.org/2000/svg">
        <circle cx="139" cy="100" r="90" fill="${this.shapeColor}" stroke="black"/>
        <text x="138" y="112" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg >
        `
    }
}

module.exports = Circle