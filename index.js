// Your code here

class Polygon {
  constructor(sides) {
    this.sides = sides;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    let sum = 0;
    for(const side of this.sides)
      sum += side;
    return sum;
  }
}

class Triangle extends Polygon {
  constructor(sides) {
    super(sides);
  }
  get isValid() {
   let side1 = this.sides[0];
   let side2 = this.sides[1];
   let side3 = this.sides[2];
   if(side1 === side2 && side1 === side3 && side2 == side3){
    return true;
   } else {
     return false;
   }
  }
}

class Square extends Polygon {
  constructor(sides) {
    super(sides);
  }
  get isValid() {
    
  }
  
}

