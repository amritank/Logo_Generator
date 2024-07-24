const Shape = require("../lib/shape.js")

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return "Render function implementation in progress";
    }
}

module.exports = Circle