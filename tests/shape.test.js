const Shape = require("../lib/shape.js");

describe("Shape", () => {
    describe("constructor", () => {

        test('Should throw error if logo text length > 3', () => {
            const func = () => new Shape("TEST", "green", "yellow");
            const err = new Error("Logo text can only be 3 characters long");
            expect(func).toThrow(err);
        })
    });
    describe("render", () => {
        test("Should throw error if render function is called.", () => {
            const sh = new Shape("foo", "green", "yellow");
            const err = new Error("render() method can only be invoked on child classes!");
            expect(() => sh.render()).toThrow(err);
        });
    });
});