function IsLogoTextValid(text) {
    if (text.trim().length < 3) return false;

    return true;
};

function IsValidHexColor(hex) {
    //Regular Expression for identifying a valid hex color
    const exp = /^#[0-9a-f]{6}$/ig;
    
    if(hex.match(exp) === null) return false;

    return true;
}

function RenderOuterSVG(height, width, innerSVG) 
{
    return `<svg version="1.1" 
    width="${width}" 
    height="${height}" 
    xmlns="http://www.w3.org/2000/svg">
    
    ${innerSVG(height, width)}
    
    </svg>`
}

module.exports = {
    IsLogoTextValid: IsLogoTextValid,
    IsValidHexColor: IsValidHexColor
}