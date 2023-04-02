/**
 * base shape class; not intended to be implemented directly. 
 */
class Shape {
    fontSizeFactor = 1.5;

    constructor(text, textColor, color, shape, height, width) {
        this.Text = text,
            this.TextColor = textColor,
            this.Color = color,
            this.Shape = shape,
            this.Height = height,
            this.Width = width
    };

    /**
     * takes x,y coordinates of where the shape should be centered; 
     * if no coordinates are provided it assumes to be located
     * at the shapes original center. 
     * @param {number} xPos 
     * @param {number} yPos 
     * @returns inner SVG text to be used
     */
    render(xPos, yPos) {
        if (xPos === undefined) xPos = this.Width / 2;
        if (yPos === undefined) yPos = this.Height / 2;

        return `${this.renderShape(xPos, yPos)}

        ${this.renderText(xPos, yPos)}
        `;
    }

    /**
     * Will place a text element at the provided coordinates. 
     * font size will adjusted based on the amount text. 
     * @param {number} xPos 
     * @param {number} yPos 
     * @returns returns the text element of an svg
     */
    renderText(xPos, yPos) {
        return `<text 
        x="${xPos}" 
        y="${yPos}"
        font-size="${this.Width / this.Text.length * this.fontSizeFactor}"
        text-anchor="middle"
        dominant-baseline="middle"
        fill="${this.TextColor}">
        ${this.Text}
        </text>`;
    };

    /**
     * Method bust be implemented by inherited tasks.
     * Method is expected to generate the text element of a shape that will
     * be centered at the provided coordinates. 
     * @param {number} xPos 
     * @param {number} yPos 
     */
    renderShape(xPos, yPos) {
        throw new Error("Must Be Implemented in Child Class");
    }
};

/**
 * Implements Shape to generate a Triange element in an SVG
 */
class Triangle extends Shape {
    constructor(text, textColor, color, height, width) {
        super(text, textColor, color, "triange", height, width);
        this.fontSizeFactor = .625;
    }

    /**
     * Generate a triangel svg element centered at the provided coordinates. 
     * @param {number} xPos 
     * @param {number} yPos 
     * @returns 3 sided polygon svg element
     */
    renderShape(xPos, yPos) {
        let xAdj = xPos - (this.Width / 2)
        let yAdj = yPos - (this.Height / 2)
        return `<polygon 
        points="${0 + xAdj}, ${this.Height + yAdj} ${(this.Width / 2) + xAdj}, ${0 + yAdj} ${this.Width + xAdj}, ${this.Height + yAdj}"
        fill="${this.Color}"
        />`;
    }
}

/**
 * Implements Shape to generate a circle element in an SVG
 */
class Circle extends Shape {
    constructor(text, textColor, color, radius) {
        super(text, textColor, color, "circle", radius * 2, radius * 2);
        this.Radius = radius;
    }

    /**
     * Generates a circular SVG element centered at the provided coordinates.
     * @param {number} xPos 
     * @param {number} yPos 
     * @returns circular SVG element
     */
    renderShape(xPos, yPos) {
        return `<circle
        cx="${xPos}"
        cy="${yPos}"
        r="${this.Radius}"
        fill="${this.Color}"
        />`;
    }
}

/**
 * Implements shape element to create a square SVG element. 
 */
class Square extends Shape {
    constructor(text, textColor, color, height) {
        super(text, textColor, color, "square", height, height);
    }

    /**
     * Will generate a square element centered at the provided coordinates.
     * @param {number} xPos 
     * @param {number} yPos 
     * @returns returns a square svg element.
     */
    renderShape(xPos, yPos) {
        xPos = (xPos - this.Width / 2)
        yPos = (yPos - this.Height / 2)
        return `<rect
        x="${xPos}"
        y="${yPos}"
        width="${this.Width}"
        height="${this.Height}"
        fill="${this.Color}"
        />`;
    }
}

module.exports = {
    Triangle: Triangle,
    Circle: Circle,
    Square: Square
}