const greeter = (name = 'user') => {
    console.log("Hello " + name)
}
greeter(" Sreekanth")

greeter()

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json.then((data)=>{
        console.log(data)
    })
})