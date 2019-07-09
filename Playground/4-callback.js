//Callback Function

const add = (a, b, callback) => {
    setTimeout( () => {
        callback (a+b)
    },2000)
}
add (4,5, (sum) => {console.log(sum)})