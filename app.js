const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');


// const getNotes = require('./notes.js');

// const msg = getNotes()
// console.log(chalk.green(msg));
// console.log(validator.isURL('https://testxample.com'));
// console.log(chalk.green.inverse.bold('Hello world!'))

// const command = process.argv[2]
// console.log(process.argv)

// if(command === 'add'){
// }
// else if(command === 'remove'){
// }


// customize yargs version
yargs.version('1.1.0')

// add command
yargs.command({
    command: "add",
    description: "add a new note",
    builder: {
        title:{
            describe: "Note Title",
            demandOption: true,
            type: "string",
        },
        body:{
            describe: "Note Body",
            demandOption: true,
            type: "string",
        }
    },
    handler(argv){
        // console.log("Title: "+ argv.title)
        // console.log("Body: " + argv.body )
        notes.addNote(argv.title, argv.body)

    }
})
// remove command
yargs.command({
    command: "remove",
    description: "remove a note",
    builder:{
        title:{
            describe: "note title",
            demandOptions: true
        }
    },
    handler(argv){
        console.log("removing a note")
        notes.removeNote(argv.title)
    }
})
// list command
yargs.command({
    command: "list",
    description: "list the notes",
    handler(){
        notes.listNotes()
        // console.log("listing up all notes")
    }
})

// read command
yargs.command({
    command: "read",
    description: "read a note",
    builder:{
        title:{
            describe: "note title",
            demandOption: true,
        }
    },
    handler(argv){
        notes.readNote(argv.title)
        // console.log("reading a note")
    }
})
console.log(yargs.argv)
