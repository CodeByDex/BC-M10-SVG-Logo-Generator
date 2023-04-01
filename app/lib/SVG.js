function IsLogoTextValid(text) {
    if (text.trim().length < 3) return false;

    return true;
}

module.exports = {
    IsLogoTextValid: IsLogoTextValid
}