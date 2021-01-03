function digital() {
    let clock = document.getElementById('Digital')
    let seconds = document.createElement('div')
    seconds.id = 'Seconds'
    let minutes = document.createElement('div')
    minutes.id = 'Minutes'
    let hours = document.createElement('div')
    hours.id = 'Hours'

    clock.appendChild(hours)
    clock.appendChild(minutes)
    clock.appendChild(seconds)

    hours.textContent = "00:"
    minutes.textContent = "00:"
    seconds.textContent = "00"

    let hh = 1000*60*60*24
    let mm = 1000*60*60
    let ss = 1000*60
}

digital();