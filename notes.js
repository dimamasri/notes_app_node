const fs = require('fs')
const chalk = require('chalk');

// console.log('utils.js')

const name = "test"

const getNotes = () => { return 'Your notes...' }

const addNote = (title, body) => {
    const notes = loadNotes()
    // filter notes
    const duplicateNotes = notes.filter((note) => note.title === title)
    //find note with the givin title
    const duplicateNote = notes.find((note) => note.title === title)
debugger
    // console.log(duplicateNotes)
    // if (duplicateNotes.length === 0) {
    if(duplicateNote){ // || duplicateNote === undefined
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('new note added');
    } else {
        console.log('notes title taken')
    }

}

const removeNote = (title) => {
    const notes = loadNotes()
    // const filteredNotes = notes.filter(function (note) {
    //     return note.title != title
    // })
    const filteredNotes = notes.filter((note) => note.title != title)
    if (notes.length > filteredNotes.length) {
        console.log(chalk.green.inverse('Note removed!'))
    }
    else {
        console.log(chalk.red.inverse('No note found!'))
    }
    // console.log(filteredNotes)  
    saveNotes(filteredNotes)
}


const listNotes = () => {
    console.log(chalk.inverse('Your Notes List:'))
    const notes = loadNotes()
    notes.forEach((note) => {
        console.log(note.title)
    })
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else 
    console.log(chalk.red.inverse('Note not found'));
}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}