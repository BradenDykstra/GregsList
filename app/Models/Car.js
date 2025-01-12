
export default class Car {
    constructor(data) {
        this._id = data._id
        this.make = data.make
        this.model = data.model
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
    }

    get Template() {
        return `
        <div class="col-3 mb-5">
            <div class="card bg-info">
                <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.year} - ${this.make} - ${this.model}</h5>
                    <p class="card-text">${this.description}</p>
                    <p><sm>$${this.price}</sm></p>
                    <button class="btn btn-primary" onclick="app.controllers.carCtrl.bid('${this._id}')">Bid <i class="fas fa-dollar-sign"></i></button>
                    <button class="btn btn-danger" onclick="app.controllers.carCtrl.delete('${this._id}')">Delete Car <i class="fa fa-car"></i></button>
                </div >
            </div >
        </div >
            `
    }
}
