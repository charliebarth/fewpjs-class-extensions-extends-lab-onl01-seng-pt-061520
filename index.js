class Polygon {
    constructor(sides) {
      this.sides = sides
    }
  
    get countSides() {
      return this.sides.length
    }
  
    get perimeter(){
      return this.sides.reduce((total, i) => total + i)
    }
  }
  
  class Triangle extends Polygon {
    get isValid(){
      const [a,b,c] = this.sides
      if (a + b <= c || a + c <= b || b + c <= a){
        return false
      } else {
        return true
      }
    }
  }
  
  class Square extends Polygon {
    get isValid(){
      const [a,b,c,d] = this.sides
      if (a === b && b === c && c === d) {
        return true
      } else {
        return false
      }
  }
  
  get area() {
      return this.sides[0] * this.sides[0]
  }
} 