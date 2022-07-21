import React,{useState} from 'react'
import Note from './Note'
import '../css/Note.css'



const Notes = () => {

  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  return (
    <div className='notes'>
      <Note/>
      <Note/>
      <Note/>
    </div>
  )
}

export default Notes