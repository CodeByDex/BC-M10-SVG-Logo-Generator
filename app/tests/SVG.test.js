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
            expect(svg.IsLogoTextValid("#12345z")).toEqual(false);
        })

        it("should return false if the hex value is too short", () => {
            expect(svg.IsLogoTextValid("#12345")).toEqual(false);
        })

        it("should return false if the hex value is too long", () => {
            expect(svg.IsLogoTextValid("#1234567")).toEqual(false);
        })

        it("should return false if the hex value is missing #", () => {
            expect(svg.IsLogoTextValid("1234567")).toEqual(false);
        })
    })
})