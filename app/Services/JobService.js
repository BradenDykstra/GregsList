import Job from "../Models/Job.js";

// @ts-ignore
let _jobApi = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/jobs'
})

let _state = {
  jobs: []
}

let _subscribers = {
  jobs: []
}

function _setState(propName, data) {
  _state[propName] = data
  _subscribers[propName].forEach(fn => fn())
}

export default class JobService {
  constructor() {

  }
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  addJob(data) {
    _jobApi.post('', data)
      .then(res => {
        _state.jobs.push(res.data.data)
        _setState('jobs', _state.jobs)
      })
  }

  deleteJob(id) {
    _jobApi.delete(id)
      .then(res => {
        let index = _state.jobs.findIndex(job => job._id == id)
        _state.jobs.splice(index, 1)
        _setState('jobs', _state.jobs)
      })
  }
  get Jobs() {
    return _state.jobs.map(j => new Job(j))
  }

  getApiJobs() {
    _jobApi.get()
      .then(res => {
        let jobData = res.data.data.map(j => new Job(j))
        _setState('jobs', jobData)
      })
  }
}