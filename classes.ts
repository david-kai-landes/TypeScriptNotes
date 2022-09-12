//  Always going to capitalize the name of a class.
// class Vehicle {
//   //   public drive(): void {
//   //     console.log("chugga chugga");
//   //   }
//   public honk(): void {
//     console.log("Beep");
//   }
// }

// By writing in this little additional syntax right here,
// we're essentially telling TypeScript that we want it to take all the different
// methods inside of this class and essentially copy paste them over to class car.
// class Car extends Vehicle {
//   private drive(): void {
//     console.log("Vroom");
//   }
//   startDrivingProcess(): void {
//     this.drive();
//   }
// }

// instance of a car.
// const car = new Car();
// car.startDrivingProcess();
// car.honk();

//.........................................................................................
//  Traditionally, we're going to name all of our different classes with a capital letter,
//  and then any time we have an instance of that class,
//  we will sometimes use the same word but spell it out with lowercase
// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
//.........................................................................................

// class Vehicle {
//   color: string;

//   constructor(color: string) {
//     this.color = color;
//   }

//   protected honk(): void {
//     console.log("Bep");
//   }
// }

// const vehicle = new Vehicle("orange");
// console.log(vehicle.color);

// class Car extends Vehicle {
//   private dirive(): void {
//     console.log("Vroom");
//   }
// }
//.........................................................................................

class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("Beep");
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("Vroom");
  }
  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car(4, "red");
car.startDrivingProcess();
