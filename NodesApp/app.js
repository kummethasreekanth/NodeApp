
const chalk = require('chalk')
const yargs = require('yargs')
const fs = require('fs')        // Filesystem Importing form Node Modules
const notes = require ('./notes.js')    //const add = require ('./notes.js')

    

// validator NpM Package Importing
    //const validator = require('validator')

    //const msg = getNotes()

    //To write into a file
        //fs.writeFileSync('notes.txt', 'Welcome to the Node Sree');

// To append the text with Existing Files
    // fs.appendFileSync('notes.txt', 'Kanth');

    //const sum = add(2, 3);

    //console.log(sum);
    //console.log(msg);

    //console.log(chalk.white.bgGreen.bold(msg));
    // validator NpM package example
        //console.log(validator.isEmail('kummetha.sreekanth@gmail.com'))

    // command line arguments from user
        //Arguements Vector
            //console.log(process.argv)
            // const command = process.argv[2]
            // if (command=== 'add'){
            //     console.log('I am adding Node')
            // }else if(command === 'remove') {
            //     console.log('Removing Note')
            // }

    // customize Yargs New Version
        yargs.version('1.1.0')

    // Using Yargs
        // adding Notes Command
        yargs.command({
            command: 'add',
            describe: 'adding a Notes',
            builder:{
                title: {
                    describe: "Note Title",
                    //demandOption: true,
                    type: 'string'
                },
                body: {
                    describe: "Note Body",
                    type: 'string'
                }
            },
            handler(argv){
                //console.log('adding a New Notes', argv)
                notes.addNote(argv.title, argv.body)
            }
        })

        // Remove Notes Command
        yargs.command({
            command: 'remove',
            describe: 'Remove a Notes',
            builder:{
                title: {
                    describe: "Remove Note Title",
                    type: 'string'
                },
                body: {
                    describe: "Remove Note Body",
                    type: 'string'
                }
            },
            handler(argv){
                //console.log('Remove a New Notes')
                notes.removeNote(argv.title)
            }
        })

        // List Notes Command
        yargs.command({
            command: 'list',
            describe: 'Listing a Notes',
            handler(){
                //console.log('Listing a New Notes')
                notes.notesList()
            }
        })

        // Read Notes Command
        yargs.command({
            command: 'read',
            describe: 'Read a Notes',
            builder:{
                title: {
                    describe: "Read Title",
                    type: 'string'
                },
                body: {
                    describe: "Read Body",
                    type: 'string'
                }
            },
            handler(argv){
                //console.log('Read a New Notes')
                notes.readNote(argv.title)
            }
        })

        yargs.parse()

        //console.log(yargs.argv)

