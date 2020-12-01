const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/forecast?access_key=d0b8e2e7342964a0ad58b184a5b0445f&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            console.log(body.current)
            callback(
                undefined, 
                body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + 
                body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + '%.'
            )
        }
    })
}

module.exports = forecast