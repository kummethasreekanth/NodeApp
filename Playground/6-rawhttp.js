const https = require('https')

const url = "https://api.darksky.net/forecast/a03c4261de33781c152bfec27e99abd2/37.8267,-122.4233"

const request=https.request(url, (response)=>{
    let data = ''
    response.on('data', (chunk)=>{
        data= data + chunk.toString()
    })

    response.on('end', ()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error)=>{
    console.log('An Error' + error)
})

request.end()