const s = require("../lib/Shapes");

const text = "Foobar";
const color = "col";
const textColor = "txtCol";
const xPos = 10;
const yPos = 20;

describe("Circle Tests", () => {
    const rad = 1;
    const shape = new s.Circle(text, textColor, color, rad)

    it("Color Set", () => {
        expect(shape.Color).toEqual(color);
    })

    it("text Set", () => {
        expect(shape.Text).toEqual(text);
    })

    it("text Color Set", () => {
        expect(shape.TextColor).toEqual(textColor);
    })

    it("radius Set", () => {
        expect(shape.Radius).toEqual(rad);
    })

    it("Text Render", () => {
        expect(shape.renderText(xPos, yPos).replaceAll(" ", "")).toEqual(`<text 
        x="10" 
        y="20"
        font-size="0.5"
        text-anchor="middle"
        dominant-baseline="middle"
        fill="${textColor}">
        ${text}
        </text>`.replaceAll(" ", ""));
    })
})

describe("Triangle Tests", () => {
    const text = "Foobar";
    const color = "col";
    const textColor = "txtCol";
    const height = 1;
    const width = 2;

    const shape = new s.Triangle(text, textColor, color, height, width)

    it("Color Set", () => {
        expect(shape.Color).toEqual(color);
    })

    it("text Set", () => {
        expect(shape.Text).toEqual(text);
    })

    it("text Color Set", () => {
        expect(shape.TextColor).toEqual(textColor);
    })

    it("height Set", () => {
        expect(shape.Height).toEqual(height);
    })

    it("width Set", () => {
        expect(shape.Width).toEqual(width);
    })


})

describe("Square Tests", () => {
    const text = "Foobar";
    const color = "col";
    const textColor = "txtCol";
    const height = 1;

    const shape = new s.Square(text, textColor, color, height)

    it("Color Set", () => {
        expect(shape.Color).toEqual(color);
    })

    it("text Set", () => {
        expect(shape.Text).toEqual(text);
    })

    it("text Color Set", () => {
        expect(shape.TextColor).toEqual(textColor);
    })

    it("height Set", () => {
        expect(shape.Height).toEqual(height);
    })

    it("width Set", () => {
        expect(shape.Width).toEqual(height);
    })
})