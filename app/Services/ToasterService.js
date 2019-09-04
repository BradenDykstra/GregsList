import Toaster from '../Models/Toaster.js'

// @ts-ignore
let _toasterApi = axios.create({
  baseURL: '//localhost:3000/api/toasters'
})

let _state = {
  toasters: []
}

let _subscribers = {
  toasters: []
}

function _setState(propName, data) {
  _state[propName] = data;
  _subscribers[propName].forEach(fn => fn());
}

export default class ToasterService {
  addToaster(data) {
    _toasterApi.post('', data)
      .then(res => {
        _state.toasters.push(res.data)
        _setState('toasters', _state.toasters)
      })
  }

  deleteToaster(id) {
    _toasterApi.delete(id)
      .then(res => {
        let index = _state.toasters.findIndex(house => house._id == id)
        _state.toasters.splice(index, 1)
        _setState('toasters', _state.toasters)
      })
  }

  bid(id) {
    let house = _state.toasters.find(h => h._id == id)
    house.price++
    _toasterApi.put(id, { price: house.price })
      .then(res => {
        _setState('toasters', _state.toasters)
      })
  }

  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  get Toasters() {
    return _state.toasters.map(h => new Toaster(h))
  }

  getApiToasters() {
    _toasterApi.get()
      .then(res => {
        let toasterData = res.data.map(h => new Toaster(h))
        _setState('toasters', toasterData)
      })
      .catch(err => {
        console.error(err)
      })

  }
}