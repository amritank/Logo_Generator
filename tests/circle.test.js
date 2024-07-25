const Circle = require("../lib/circle.js")

describe("Circle", () => {
    describe("render", () => {
        test("Should return svg text representing a circle.", () => {
            const circle = new Circle("foo", "green", "yellow");
            expect(circle.render()).toContain('<circle cx="139" cy="100" r="90" fill="yellow" stroke="black"/>');
        });
        test("Should return svg text representing the text in the logo", () => {
            const circle = new Circle("foo", "teal", "yellow");
            expect(circle.render()).toContain('<text x="138" y="112" font-size="40" text-anchor="middle" fill="teal">FOO</text>');
        })
    });
    describe("text", () => {
        test('Should throw error if logo text length > 3', () => {
            const func = () => new Circle("TEST", "green", "yellow");
            const err = new Error("Logo text can only be 3 characters long");
            expect(func).toThrow(err);
        });
    })
})

