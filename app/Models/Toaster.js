export default class Toaster {
  constructor(data) {
    this._id = data._id
    this.slots = data.slots
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }

  get Template() {
    return `
        <div class="col-3 mb-5">
            <div class="card bg-info">
                <div class="card-body">
                    <img src='${this.imgUrl}'/>
                    <h5 class="card-title">${this.slots} Slots</h5>
                    <p class="card-text"> ${this.description}</p>
                    <p><sm>$${this.price}</sm></p>
                    <p><sm>Made in ${this.year}</sm></p>
                    <button class="btn btn-danger" onclick="app.controllers.toasterCtrl.delete('${this._id}')">Delete Toaster <i class="fa fa-bread-slice"></i></button>
                </div >
            </div >
        </div >
            `
  }
}