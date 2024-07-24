const Square = require("../lib/square.js")

describe("Square", () => {
    describe("render", () => {
        test("Should return svg text representing a square.", () => {
            const sq = new Square("foo", "green", "yellow");
            expect(sq.render()).toContain('<polygon points="60, 20, 230, 20, 230, 180, 60, 180" fill="yellow" stroke="black" />');
        });
        test("Should return svg text representing the text in the square logo", () => {
            const sq = new Square("foo", "teal", "yellow");
            expect(sq.render()).toContain('<text x="143" y="110" font-size="40" text-anchor="middle" fill="teal">FOO</text>');
        })
    });
    describe("text", () => {
        test('Should throw error if logo text length > 3', () => {
            const func = () => new Square("TEST", "green", "yellow");
            const err = new Error("Logo text can only be 3 characters long");
            expect(func).toThrow(err);
        })
    })
})