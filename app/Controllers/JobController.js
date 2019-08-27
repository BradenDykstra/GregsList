import JobService from "../Services/JobService.js";

let _js = new JobService()

function _draw() {
  let jobs = _js.Jobs
  let template = ''
  jobs.forEach(j => template += j.Template)
  document.getElementById('job-cards').innerHTML = template
}

export default class JobController {
  constructor() {
    _js.getApiJobs()
    _js.addSubscriber('jobs', _draw)
  }

  addJob(e) {
    e.preventDefault()
    let form = e.target
    let data = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      rate: form.rate.value,
      hours: form.hours.value,
      description: form.description.value
    }
    _js.addJob(data)
    form.reset()
  }

  delete(id) {
    if (window.confirm("Are you sure?")) {
      _js.deleteJob(id)
    }
  }
}