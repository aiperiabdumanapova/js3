function calculate(num1, num2, callback) {
    const result = callback(num1, num2);
    console.log(result);
  }
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      return "На ноль делить нельзя!";
    }
    return a / b;
  }
  calculate(5, 3, add); 
  calculate(10, 4, subtract); 
  calculate(7, 2, multiply); 
  calculate(10, 0, divide); 
  