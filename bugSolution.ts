function printNumber(num: number): void {
  if (typeof num !== 'number') {
    console.error('Error: Invalid input type. Expected number, received:', typeof num);
    return;
  }
  console.log(num);
}

function calculate(a: number, b: number): number {
  return a + b;
}

const result = calculate(10, 20);
printNumber(result);

//This will now print an error message instead of throwing an error
printNumber("hello");