const fileSystem = require('fs')
const book = {
    title: 'Energy',
    author: 'Sreekanth Reddy K',
    age: 27
}
//To get Object to JSON using JS method
const bookJSON= JSON.stringify(book)
console.log(bookJSON)

fileSystem.writeFileSync('1-json.json', bookJSON)
// To get JSON to Object
    //const parseData= JSON.parse(bookJSON)
    //console.log(parseData)
    const dataBuffer = fileSystem.readFileSync('1-json.json') //it will give the data into Binary
    const dataJSON = dataBuffer.toString() // It will convert binary to String
    const user = JSON.parse(dataJSON) //It will convert JSON data to Object

    //console.log(user.age)

    //details updation
    user.title = 'Title Data Modified',
    user.author = 'K Sreekanth Reddy'
    const userUpdate = JSON.stringify(user) //it will convert into JSON Data
    fileSystem.writeFileSync('1-json.json', userUpdate)
