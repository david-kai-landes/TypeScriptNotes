const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
// carMakers.push(100);

//Help with "MAP"
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//  Multiple Types in Arrays
//  Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push("2020-10-10"); //Example
importantDates.push(new Date());
