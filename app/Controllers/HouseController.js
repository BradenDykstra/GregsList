import HouseService from '../Services/HouseService.js'

let _hs = new HouseService()

function _draw() {
  let houses = _hs.Houses
  let template = ''
  houses.forEach(h => template += h.Template)
  document.getElementById('house-cards').innerHTML = template
}

export default class HouseController {
  constructor() {
    _hs.addSubscriber('houses', _draw)
    _hs.getApiHouses()
  }

  addHouse(e) {
    e.preventDefault();
    let form = e.target
    let data = {
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      levels: form.levels.value,
      imgUrl: form.imgUrl.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value
    }
    _hs.addHouse(data)
    form.reset()
  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      _hs.deleteHouse(id)
    }
  }

  bid(id) {
    _hs.bid(id)
  }
}