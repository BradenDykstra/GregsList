export default class House {
  constructor(data) {
    this._id = data._id
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.description = data.description
    this.imgUrl = data.imgUrl
    this.levels = data.levels
    this.price = data.price
    this.year = data.year
  }

  get Template() {
    return `
        <div class="col-3 mb-5">
            <div class="card bg-info">
                <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${this.bedrooms} Bed - ${this.bathrooms} Bath - ${this.levels} Floors</h5>
                    <sm>Built in ${this.year}.</sm>
                    <p class="card-text"> ${this.description}</p>
                    <p><sm>$${this.price}</sm></p>
                    <button class="btn btn-primary" onclick="app.controllers.houseCtrl.bid('${this._id}')">Bid</button>
                    <button class="btn btn-danger" onclick="app.controllers.houseCtrl.delete('${this._id}')">Delete House</button>
                </div >
            </div >
        </div >
            `
  }
}