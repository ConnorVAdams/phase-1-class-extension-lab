class Polygon {
    constructor(sides) {
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
    return this.sides.reduce((acc, current) => {
        if (Number.isInteger(current)) {
            return acc + current
        } else {
            return acc
        }
        }, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides.length !== 3) {
            return false
        } else {
            this.sides.sort((a, b) => a - b)
            return this.sides[0] + this.sides[1] > this.sides[2]
        }
    }
}

class Square extends Polygon {

    get area() {
        return this.sides[0] * this.sides[1]
    }

    get isValid() {
        if (this.sides.length !== 4) {
            return false
        } else {
            const firstValue = this.sides[0]
        for (let i = 1; i < this.sides.length; i++) {
            if (this.sides[i] !== firstValue) {
                return false
            }
        }
        return true
        }
    }
}