const svg = require("../lib/SVG");

describe("SVG Test Cases", () => {
    describe("Valid Text", () => {
        it("Should return true if text is 3 characters", () => {
            expect(svg.IsLogoTextValid("abc")).toEqual(true);
        })

        it("Should return true if text is more than 3 characters", () => {
            expect(svg.IsLogoTextValid("abcdef")).toEqual(true);
        })

        it("Should return true if text is >= 3 characters and contains embeded white space", () => {
            expect(svg.IsLogoTextValid("a c")).toEqual(true);
        })

        it("Should return true if text is >= 3 characters and contains outer white space", () => {
            expect(svg.IsLogoTextValid(" a c ")).toEqual(true);
        })
    })

    describe("invalid Text", () => {
        it("Should return false if text is < 3 characters", () => {
            expect(svg.IsLogoTextValid("ab")).toEqual(false);
        })

        it("Should return false if text is >= 3 characters and contains outer white space", () => {
            expect(svg.IsLogoTextValid(" a ")).toEqual(false);
        })
    })

    describe("Valid Hex Colors", () => {
        it("should return true if the hex value is a valid color value", () => {
            expect(svg.IsValidHexColor("#123456")).toEqual(true);
        })
    })

    describe("Invalid Hex Colors", () => {
        it("should return false if the hex value contains invalid characters", () => {
            expect(svg.IsValidHexColor("#12345z")).toEqual(false);
        })

        it("should return false if the hex value is too short", () => {
            expect(svg.IsValidHexColor("#12345")).toEqual(false);
        })

        it("should return false if the hex value is too long", () => {
            expect(svg.IsValidHexColor("#1234567")).toEqual(false);
        })

        it("should return false if the hex value is missing #", () => {
            expect(svg.IsValidHexColor("1234567")).toEqual(false);
        })
    })

    describe("SVG Render", () => {
        it("Should return expect svg content", () => {
            expect(svg.RenderSVG(1, 1, "foo").replaceAll(" ", "")).toEqual(`<svg version="1.1" 
            width="1" 
            height="1" 
            xmlns="http://www.w3.org/2000/svg">
            
            foo
            
            </svg>`.replaceAll(" ", ""))
        })
    })
})