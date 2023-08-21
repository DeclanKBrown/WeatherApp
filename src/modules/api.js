export default class API {
    static get(location) {
        fetch(`https://api.weatherapi.com/v1/current.json?key=cec82327ff6049df98a45230232008&q=${location}`, {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function (response) {
            console.log(response)
        })

    }
}