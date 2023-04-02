class Shape {
    constructor(text, textColor, color, shape, height, width){
        this.Text = text,
        this.TextColor = textColor,
        this.Color = color,
        this.Shape = shape,
        this.Height = height,
        this.Width = width
    };

    render(xPos, yPos){
        if (xPos === undefined) xPos = this.Width/2;
        if (yPos === undefined) yPos = this.Height/2;

        return `${this.renderShape(xPos, yPos)}

        ${this.renderText(xPos, yPos)}
        `;
    }

    renderText(xPos, yPos) {
        return `<text 
        x="${xPos}" 
        y="${yPos}"
        fount-size="60"
        text-anchor="middle"
        fill="${this.TextColor}">
        ${this.Text}
        </text>`;
    };

    renderShape(xPos, yPos) {
        throw new Error("Must Be Implemented in Child Class");
    }
};

class Triangle extends Shape{
    constructor(text, textColor, color, height, width) {
        super(text, textColor, color, "triange", height, width);
    }

    /**
     * points parameter coordinate 0,0 will be the top left corner
     * @returns text for shape element of an svg
     **/
    renderShape(xPos, yPos){
        let xAdj = xPos - (this.Width/2)
        let yAdj = yPos - (this.Height/2)
        return `<polygon 
        points="${0+xAdj}, ${this.Height+yAdj} ${(this.Width/2) + xAdj}, ${0+yAdj} ${this.Width+xAdj}, ${this.Height+yAdj}"
        fill="${this.Color}"
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
        cx="${this.Radius}"
        cy="${this.Radius}"
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