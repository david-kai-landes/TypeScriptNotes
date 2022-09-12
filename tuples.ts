//  write out an object that looks like that drink object
//  that we just put together or was inside that diagram
// const drink = {
//   color: "brown",
//   carbonated: true,
//   sugar: 40,
// };

//   And I'm going to write out what looks like an array.
// const pepsi = ["brown", true, 40];
// pepsi[0] = 40;
// pepsi[2] = "brown";

//Type Alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", true, 0];
