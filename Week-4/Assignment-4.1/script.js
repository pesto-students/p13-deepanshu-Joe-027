class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  add() {
    return a + b;
  }

  subtract() {
    return a - b;
  }

  multiply() {
    return a * b;
  }

  divide() {
    return a / b;
  }
}

const calc = new Calculator(5, 10);
console.log(calc)