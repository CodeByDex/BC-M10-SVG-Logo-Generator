class Shape {
    constructor(text, textColor, color, shape){
        this.Text = text,
        this.TextColor = textColor,
        this.Color = color,
        this.Shape = shape
    };

    render() {
        return `Shape: ${this.Shape}, Color: ${this.Color}, Text: ${this.Text}, Text Color: ${this.TextColor}`;
    }
};

class Triangle extends Shape{
    constructor(text, textColor, color) {
        super(text, textColor, color, "triange");
    }
}

class Circle extends Shape{
    constructor(text, textColor, color) {
        super(text, textColor, color, "circle");
    }
}

class Square extends Shape{
    constructor(text, textColor, color) {
        super(text, textColor, color, "square");
    }
}

module.exports = {
    Triangle: Triangle,
    Circle: Circle,
    Square: Square
}