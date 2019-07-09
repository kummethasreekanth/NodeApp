const fs = require('fs') 
const chalk = require('chalk')

//fs.appendFileSync('notes.txt', '. Good to Go');

const getNotes = function () {
    return "what is your name"
}

// const add = function(a, b){
//     return a + b
// }

// Add a new notes

const addNote = (title, body) => {  //const addNote = function(title, body){
    const notes = loadNotes()

    // Filter to find duplicate Notes
        //const duplicateNotes = notes.filter ((note) => note.title === title) //shorthand with Arrow Function --> standard function replaced with Arrow function

    // const duplicateNotes = notes.filter (function(note){ --> standard function replaced with Arrow
    //     return note.title === title
    // })

    const duplicateNote = notes.find ((note) => note.title === title) //shorthand with Arrow Function --> standard function replaced with Arrow function
    debugger
    if(!duplicateNote){ // for filter Method if(duplicateNotes.length === 0){
        
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)

        //console.log('title is saved in a notes')
        console.log(chalk.green.inverse('title is saved in a notes'))
    }else {
        //console.log("title is already taken")
        console.log(chalk.red.inverse('title is already taken'))
    }
}

const saveNotes = (notes) => { //const saveNotes = function(notes){ --> standard function replaced with Arrow
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes1.JSON', dataJSON)
}

//Remove Notes Function

const removeNote = (title) => { //const removeNote = function(title){
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    // const notesToKeep = notes.filter(function(note) {
    //     return note.title !== title
    // })

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note Was Removed'))
        saveNotes(notesToKeep)
    }
    else {
        console.log(chalk.red.inverse('No Note Was Removed'))
    }
    
}

// Notes List Printing

const notesList = (title) => {
    const notes = loadNotes()
    //const printNotes = notes.forEach((note) => note.title === title)
    notes.forEach((note) => {console.log(note.title) })
    console.log(chalk.green.inverse('Note List'))

}

// Read notes

const readNote = (title) => {
    const notes = loadNotes()
    const notesToRead = notes.find((note) => note.title == title)

    if(!notesToRead){
        console.log (chalk.red.inverse('No Note Found'))
    }else {
        console.log (chalk.green.inverse('Title :' + notesToRead.title))
        console.log ('body :' + notesToRead.body)
    }
}

const loadNotes = () => { //const loadNotes = function() {--> standard function replaced with Arrow
    try {
        const dataBuffer = fs.readFileSync('notes1.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e){
        return []
    }
   
}

//module.exports = add
module.exports = { 
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    notesList: notesList,
    readNote: readNote
}