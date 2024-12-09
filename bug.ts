function printNumber(num: number): void {
  console.log(num);
}

function calculate(a: number, b: number): number {
  return a + b;
}

const result = calculate(10, 20);
printNumber(result); //This line will throw an error if result is not a number

//This will cause a runtime error.
printNumber("hello");