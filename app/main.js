import CarController from "./Controllers/CarController.js";
import HouseController from "./Controllers/HouseController.js";
import JobController from "./Controllers/JobController.js";
import ToasterController from "./Controllers/ToasterController.js";


class App {
    constructor() {
        this.controllers = {
            carCtrl: new CarController(),
            houseCtrl: new HouseController(),
            jobCtrl: new JobController(),
            toasterCtrl: new ToasterController()
        }
    }
}

window['app'] = new App()