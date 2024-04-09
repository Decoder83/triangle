var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
        this.checkValidity();
    }
    // Setter and Getter for sides
    Triangle.prototype.setSideA = function (value) {
        this.sideA = value;
        this.checkValidity();
    };
    Triangle.prototype.setSideB = function (value) {
        this.sideB = value;
        this.checkValidity();
    };
    Triangle.prototype.setSideC = function (value) {
        this.sideC = value;
        this.checkValidity();
    };
    Triangle.prototype.getSideA = function () {
        return this.sideA;
    };
    Triangle.prototype.getSideB = function () {
        return this.sideB;
    };
    Triangle.prototype.getSideC = function () {
        return this.sideC;
    };
    // Private method to check if sides form a valid triangle
    Triangle.prototype.checkValidity = function () {
        if (this.sideA + this.sideB <= this.sideC ||
            this.sideA + this.sideC <= this.sideB ||
            this.sideB + this.sideC <= this.sideA) {
            throw new Error("Invalid triangle: sides do not form a valid triangle.");
        }
    };
    // Method to calculate and return the perimeter
    Triangle.prototype.getPerimeter = function () {
        return this.sideA + this.sideB + this.sideC;
    };
    // Method to calculate and return the area
    Triangle.prototype.getArea = function () {
        var s = this.getPerimeter() / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    };
    // Method to compare two triangles and return true if current triangle has larger or equal area
    Triangle.prototype.largerTriangle = function (t) {
        return this.getArea() >= t.getArea();
    };
    // Method to get the type of the triangle
    Triangle.prototype.getType = function () {
        if (this.sideA === this.sideB && this.sideB === this.sideC) {
            return "Lygiašonis";
        }
        else if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
            return "Lygiakraštis";
        }
        else if (Math.pow(this.sideA, 2) + Math.pow(this.sideB, 2) === Math.pow(this.sideC, 2) ||
            Math.pow(this.sideA, 2) + Math.pow(this.sideC, 2) === Math.pow(this.sideB, 2) ||
            Math.pow(this.sideB, 2) + Math.pow(this.sideC, 2) === Math.pow(this.sideA, 2)) {
            return "Statusis";
        }
        else {
            return "Įprastinis";
        }
    };
    // Method to return string representation of the triangle
    Triangle.prototype.toString = function () {
        return "Trikampis su kra\u0161tin\u0117mis: ".concat(this.sideA, ", ").concat(this.sideB, ", ").concat(this.sideC, ".");
    };
    return Triangle;
}());
// Array of triangles
var triangles = [
    new Triangle(3, 4, 5),
    new Triangle(5, 5, 5),
    new Triangle(5, 12, 13)
];
// Calculate sum of areas of all triangles
var sumOfAreas = 0;
triangles.forEach(function (triangle) {
    sumOfAreas += triangle.getArea();
});
console.log("Suma visų trikampių plotų:", sumOfAreas);
