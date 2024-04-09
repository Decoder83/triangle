class Triangle {
    private sideA: number;
    private sideB: number;
    private sideC: number;

    constructor(a: number, b: number, c: number) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
        this.checkValidity();
    }

    // Setter and Getter for sides
    setSideA(value: number) {
        this.sideA = value;
        this.checkValidity();
    }

    setSideB(value: number) {
        this.sideB = value;
        this.checkValidity();
    }

    setSideC(value: number) {
        this.sideC = value;
        this.checkValidity();
    }

    getSideA(): number {
        return this.sideA;
    }

    getSideB(): number {
        return this.sideB;
    }

    getSideC(): number {
        return this.sideC;
    }

    // Private method to check if sides form a valid triangle
    private checkValidity() {
        if (this.sideA + this.sideB <= this.sideC ||
            this.sideA + this.sideC <= this.sideB ||
            this.sideB + this.sideC <= this.sideA) {
            throw new Error("Invalid triangle: sides do not form a valid triangle.");
        }
    }

    // Method to calculate and return the perimeter
    getPerimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    }

    // Method to calculate and return the area
    getArea(): number {
        const s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }

    // Method to compare two triangles and return true if current triangle has larger or equal area
    largerTriangle(t: Triangle): boolean {
        return this.getArea() >= t.getArea();
    }

    // Method to get the type of the triangle
    getType(): string {
        if (this.sideA === this.sideB && this.sideB === this.sideC) {
            return "Lygiašonis";
        } else if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
            return "Lygiakraštis";
        } else if (Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2) === Math.pow(this.sideC, 2) ||
            Math.pow(this.sideA, 2) + Math.pow(this.sideC, 2) === Math.pow(this.sideB, 2) ||
            Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2) === Math.pow(this.sideA, 2)) {
            return "Statusis";
        } else {
            return "Įprastinis";
        }
    }

    // Method to return string representation of the triangle
    toString(): string {
        return `Trikampis su kraštinėmis: ${this.sideA}, ${this.sideB}, ${this.sideC}.`;
    }
}

// Array of triangles
const triangles: Triangle[] = [
    new Triangle(3, 4, 5),
    new Triangle(5, 5, 5),
    new Triangle(5, 12, 13)
];

// Calculate sum of areas of all triangles
let sumOfAreas = 0;
triangles.forEach(triangle => {
    sumOfAreas += triangle.getArea();
});

console.log("Suma visų trikampių plotų:", sumOfAreas);
