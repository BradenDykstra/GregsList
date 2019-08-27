export default class Job {
  constructor(data) {
    this._id = data._id
    this.company = data.company
    this.jobTitle = data.jobTitle
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }

  get Template() {
    return `
        <div class="col-3 mb-5">
            <div class="card bg-info">
                <div class="card-body">
                    <h5 class="card-title">${this.jobTitle}</h5>
                    <h5>${this.company}</h5>
                    <p class="card-text"> ${this.description}</p>
                    <p><sm>$${this.rate}</sm></p>
                    <p><sm>${this.hours} hours</sm></p>
                    <button class="btn btn-danger" onclick="app.controllers.jobCtrl.delete('${this._id}')">Delete Job <i class="fa fa-briefcase"></i></button>
                </div >
            </div >
        </div >
            `
  }
}