//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){ // Arrow Method
        // const getTasksToKeep = this.tasks.filter((task) => { //Arrow Function Method
        //     return task.completed === false
        // })
        // return getTasksToKeep

        // return getTasksToKeep = this.tasks.filter((task) => { // Optimized Arrow Function Method 
        //     return task.completed === false
        // })

        return getTasksToKeep = this.tasks.filter((task) => task.completed === false)// More Optimized Arrow Function Method 
            
    }
}

console.log(tasks.getTasksToDo())