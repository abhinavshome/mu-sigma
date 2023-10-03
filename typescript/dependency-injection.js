var Bike = /** @class */ (function () {
    function Bike(n) {
        this.name = n;
    }
    Bike.prototype.start = function () {
        console.log("Starting ".concat(this.name, " bike...."));
    };
    return Bike;
}());
function startBike() {
    var activa = new Bike("active");
    activa.start();
}
startBike();
