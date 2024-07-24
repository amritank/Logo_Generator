class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;

        if (this.text.length > 3) {
            throw new Error("Logo text can only be 3 characters long");
        }
    }

    render() {
        throw new Error("render() method can only be invoked on child classes!");
    }
}

module.exports = Shape