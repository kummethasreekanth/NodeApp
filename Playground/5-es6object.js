const name= "Sreekanth Reddy"
const age = 27
const location = "Bengalore"

const user = {
    name,
    age,
    location,
    state: 'AndhraPradesh'
}
//console.log(user)

//destructring object
const product = {
    pname: 'Harmony',
    stock: 201,
    price: 2356789563,
    availability: 'InStock',
    rating: 4.5
}

//default calling object

    // const name = product.name
    // const price = product.price

//Destructure Calling Object

    //const {pname, price, stock, rating} = product //default destructuring call
    //const {pname: productName, price, stock, rating} = product // destructuring call with renaming to object

    //const {pname: productName, price, stock, rating = 5} = product // destructuring call with value Assigning directly
    //console.log(pname) // It will give Error
    //console.log(productName) // It will give Output
    //console.log(price)
    //console.log(rating) //output "4.5"

//destructuring fot function

    //One type of Destructuring
        //const transaction = (type, {stock, price}) => {
            //const {stock, price} = myProduct
        //}
    //Direct Destructuring

    const transaction = (type, {stock, price}) => {
        console.log(type, stock,price)
    }

transaction ('order', product)