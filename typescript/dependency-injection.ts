class Bike {
  private name: string;
  constructor(n: string) {
    this.name = n;
  }

  start() {
    console.log(`Starting ${this.name} bike....`);
  }
}

class BikeStarter {
  //   private bike: Bike;
  //   constructor(b: Bike) {
  //     this.bike = b;
  //   }

  constructor(private bike: Bike) {}

  run() {
    this.bike.start();
  }
}
// const activa = new Bike("activa");
const activa = new Bike("tvsjupiter");
const bikeStarter = new BikeStarter(activa);
bikeStarter.run();
