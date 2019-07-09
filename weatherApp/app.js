const request = require('request')

const url = 'https://api.darksky.net/forecast/a03c4261de33781c152bfec27e99abd2/37.8267,-122.4233'


request ( { url: 'http://localhost:9200/weather/_search' }, ( error, response ) => {
//console.log(error);
//console.log(response)
    const data = JSON.parse(response.body)

    if (error) {
        console.log ('Unable to connect to Weather')
    } else if(response.body.error) {
        console.log('unable to reach location')
    }
    else {
        console.log('It is currently ' + data.hits.hits[0]._source.currently.temperature + ' degrees Out. ' + 'There is a ' + data.hits.hits[0]._source.currently.precipProbability + ' Percentage chance of rain.')  
    }
    //console.log('It is currently ' + data.hits.hits[0]._source.currently.temperature + ' degrees Out. ' + 'There is a ' + data.hits.hits[0]._source.currently.precipProbability + ' Percentage chance of rain.')
})