class Shape {
    constructor(text, textColor, color, shape, height, width){
        this.Text = text,
        this.TextColor = textColor,
        this.Color = color,
        this.Shape = shape,
        this.Height = height,
        this.Width = width
    };

    render() {
        return `${this.renderShape()}

        ${this.renderText()}
        `;
    }

    renderText() {
        return `<text 
        x="${this.Width/2}" 
        y="${this.Height/2}"
        fount-size="60"
        text-anchor="middle"
        fill="${this.TextColor}">
        ${this.Text}
        </text>`;
    };

    renderShape() {
        throw new Error("Must Be Implemented in Child Class");
    }
};

class Triangle extends Shape{
    constructor(text, textColor, color, height, width) {
        super(text, textColor, color, "triange", height, width);
    }

    renderShape(){
        return `<polygon 
        points: "0, 0 ${this.Height}, ${this.Width/2} 0, ${this.Width}"
        fill=""
        />`;
    }
}

class Circle extends Shape{
    constructor(text, textColor, color, radius) {
        super(text, textColor, color, "circle", radius * 2, radius * 2);
        this.Radius = radius;
    }

    renderShape(){
        return `<circle
        cx=""
        cy=""
        r="${this.Radius}"
        fill="${this.Color}"
        />`;
    }
}

class Square extends Shape{
    constructor(text, textColor, color, height) {
        super(text, textColor, color, "square", height, height);
    }

    renderShape(){
        return `<rect
        width="${this.Width}"
        height="${this.Height}"
        fill="${this.Color}"
        />`;
    }
}

module.exports = {
    Triangle: Triangle,
    Circle: Circle,
    Square: Square,
    Shape: Shape
}