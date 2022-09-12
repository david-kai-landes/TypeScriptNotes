//  Remember, any time we create an interface, -
//  we are creating a new type, a type in the same way that -
//  a number is a type or a string or a boolean or so on.

//..........................EXAMPLE BELOW ..........................
//  create a very generic name
// interface Vehicle {
//   name: string;
//   year: number;
//   broken: boolean;
// }

// const oldCivic = {
//   name: "Civic",
//   year: 2000,
//   broken: true,
// };

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(`Name: ${vehicle.name}`);
//   console.log(`Year: ${vehicle.year}`);
//   console.log(`Broken: ${vehicle.broken}`);
// };

// printVehicle(oldCivic);
//

//..........................EXAMPLE BELOW ..........................
//
//  create a very generic name
// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }

// const oldCivic = {
//   name: "Civic",
//   year: new Date(),
//   broken: true,
//   summary(): string {
//     return `Name: ${this.name}`;
//   },
// };

// const printVehicle = (vehicle: Vehicle): void => {
//   console.log(vehicle.summary());
// };

// printVehicle(oldCivic);

//..........................EXAMPLE BELOW ..........................
// refactoring by adding or changing code
// interface Reportable {
//   summary(): string;
// }

// const oldCivic = {
//   name: "Civic",
//   year: new Date(),
//   broken: true,
//   summary(): string {
//     return `Name: ${this.name}`;
//   },
// };

// const printSummary = (item: Reportable): void => {
//   console.log(item.summary());
// };

// printSummary(oldCivic);

//..........................EXAMPLE BELOW ..........................
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
