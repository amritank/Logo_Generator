const Triangle = require("../lib/triangle.js")

describe("Triangle", () => {
    describe("render", () => {
        test("Should return svg text representing a triangle.", () => {
            const tr = new Triangle("foo", "green", "yellow");
            expect(tr.render()).toContain('<polygon points="150,20 20,180 280,180" fill="yellow" stroke="black" />');
        });
        test("Should return svg text representing the text in the square logo", () => {
            const tr = new Triangle("foo", "teal", "yellow");
            expect(tr.render()).toContain('<text x="150" y="133" font-size="40" text-anchor="middle" fill="teal">FOO</text>');
        })
    });
    describe("text", () => {
        test('Should throw error if logo text length > 3', () => {
            const func = () => new Triangle("TEST", "green", "yellow");
            const err = new Error("Logo text can only be 3 characters long");
            expect(func).toThrow(err);
        })
    })
})