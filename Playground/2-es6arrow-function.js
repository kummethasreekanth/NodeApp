// const square = function (x){
//     return x * x
// }
//Arrow Function
// const square = (x) => {
//     return x*x
// }
//const square = (x) => x*x
//console.log(square(2))

//Arrow functions for Methods

//Standard Function
    // const event = {
    //     name : 'Birthday Party',
    //     printGuestList: function() { //Standard function Declaration
    //         console.log('Guest List for' + this.name)
    //     }
    // }
    // event.printGuestList()
//Using Arrow Function
    //Example:1
    // const event = {
    //     name : 'Birthday Party',
    //     printGuestList: () => { //Arrow function Declaration
    //         console.log('Guest List for ' + this.name) // here "this" object will not get access
    //     }
    // }
    // event.printGuestList() //output => Guest List for undefined

//Using Arrow Function with pure arrow function here "this" object will get access
    //Example:2
    // const event = {
    //     name : 'Birthday Party',
    //     printGuestList() {//Arrow function Declaration
    //         console.log('Guest List for ' + this.name) 
    //     }
    // }
    // event.printGuestList() //output => Guest List for Birthday Party

//Using Arrow Function with pure arrow function here "this" object will get access and 
//sub method using arrow function with error output
    //Example:3
// const event = {
//     name : 'Birthday Party',
//     guestList: ['sree', 'kesav', 'sai', 'sagar'],
//     printGuestList() { //Arrow function Declaration
//         console.log('Guest List for ' + this.name)
//         this.guestList.forEach(function(guest){
//             console.log(guest + ' is attending ' + this.name) //Here Again this will not get access
//         })
//     }
// }
// event.printGuestList() //output => Guest List for Birthday Party, sree is attending undefined, kesav is attending undefined, sai is attending undefined, sagar is attending undefined

//Using Arrow Function with pure arrow function here "this" object will get access and 
//sub method using arrow function with exact Output
    //Example:3
const event = {
    name : 'Birthday Party',
    guestList: ['sree', 'kesav', 'sai', 'sagar'],
    printGuestList() { //Arrow function Declaration
        console.log('Guest List for ' + this.name)
        this.guestList.forEach((guest) => { //Arrow function Declaration
            console.log(guest + ' is attending ' + this.name) //Here Again this will get access
        })
    }
}
event.printGuestList() //output => Guest List for Birthday Party, sree is attending Birthday Party, kesav is attending Birthday Party, sai is attending Birthday Party, sagar is attending Birthday Party