import ToasterService from '../Services/ToasterService.js'

let _hs = new ToasterService()

function _draw() {
  let toasters = _hs.Toasters
  let template = ''
  toasters.forEach(h => template += h.Template)
  document.getElementById('toaster-cards').innerHTML = template
}

export default class ToasterController {
  constructor() {
    _hs.addSubscriber('toasters', _draw)
    _hs.getApiToasters()
  }

  addToaster(e) {
    e.preventDefault();
    let form = e.target
    let data = {
      slots: form.slots.value,
      price: form.price.value,
      year: form.year.value,
      imgUrl: form.imgUrl.value,
      description: form.description.value
    }
    _hs.addToaster(data)
    form.reset()
  }

  delete(id) {
    // @ts-ignore
    swal({
      title: "Are you sure?",
      text: "Do you really want to delete this toaster?",
      icon: "warning",
      buttons: ["No...", "Yeah!!!!!1111!!1!11!!!!"]
    })
      .then(del => {
        if (del) {
          _hs.deleteToaster(id)
        }
      })
  }

  bid(id) {
    _hs.bid(id)
  }
}