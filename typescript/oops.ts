//Object oriented programming in typescript
class Car {
  public model: string;
  private powerInCC: number;
  constructor(n, p) {
    this.model = n;
    this.powerInCC = p;
  }

  describe() {
    console.log(
      `Hi! This car is ${this.model} and has power ${this.powerInCC} cc`
    );
  }
}

const homdaCity = new Car("Honda City", 1200);
console.log(homdaCity.model);
homdaCity.describe();

interface Vehicle {
  model: string;
  powerInCc: number;
  describe: () => void;
  groundClearance?: number;
}

// creating objects directly
const marutiCar: Vehicle = {
  model: "Maruti Suzuki Baleno",
  powerInCc: 1200,
  describe: function () {
    console.log(
      `Hi! This car is ${this.model} and has power ${this.powerInCC} cc`
    );
  },
};

marutiCar.groundClearance = 200;
