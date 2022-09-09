//  type annotations for functions
const add = (a: number, b: number): number => {
  return a + b;
};

//another example of type annotations for functions
const substarct = (a: number, b: number): number => {
  return a - b;
};

//So any time that we need to define a function using an arrow, a named funct ion,
//or an anonymous function assigned to a variable, we're always going to -
//see a near identical form of syntax.

// name fuction
function divide(a: number, b: number): number {
  return a / b;
}

//anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

//
const logger = (message: string): void => {
  console.log(message);
};

//
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};
