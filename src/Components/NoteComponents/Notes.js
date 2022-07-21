import React,{useState} from 'react'
import Note from './Note'
import '../css/Note.css'
import CreateNote from './CreateNote'
import {v4 as uuid} from 'uuid'


const Notes = () => {

  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  // get text and store in state
  const textHandler = e => {
    setInputText(e.target.value)
  }

  // add new note to the state array
  const saveHandler = () => {
    setNotes((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ])
    //clear textarea
    setInputText('')
  }

  //delete note function
  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  }

  return (
    <div className='notes'>
      <Note/>
      <Note/>
      <CreateNote/>
    </div>
  )
}

export default Notes