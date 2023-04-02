/**
 * Will determine if the provided text is valid for an SVG logo or not.
 * @param {string} text 
 * @returns returns a boolean; true for valid.
 */
function IsLogoTextValid(text) {
    if (text.trim().length < 3) return false;

    return true;
};

/**
 * Will determine if the provided value is a valid Hex color value.
 * @param {string} hex 
 * @returns returns a boolean; true for valid
 */
function IsValidHexColor(hex) {
    //Regular Expression for identifying a valid hex color
    const exp = /^#[0-9a-f]{6}$/ig;

    if (hex.match(exp) === null) return false;

    return true;
}

/**
 * Render an SVG file with the provided dimensions + provided content
 * @param {number} height 
 * @param {number} width 
 * @param {string} innerSVG 
 * @returns a complete SVG file contents. 
 */
function RenderSVG(height, width, innerSVG) {
    return `<svg version="1.1" 
    width="${width}" 
    height="${height}" 
    xmlns="http://www.w3.org/2000/svg">
    
    ${innerSVG}
    
    </svg>`
}

module.exports = {
    IsLogoTextValid: IsLogoTextValid,
    IsValidHexColor: IsValidHexColor,
    RenderSVG: RenderSVG
}