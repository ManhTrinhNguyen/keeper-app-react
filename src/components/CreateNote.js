import React, { useState } from 'react'

export default function CreateNote(props) {
    const [notes, setNotes] = useState({
        title: "",
        content:""
    })
    function handleChange(e) {
        const {value, name} = e.target
        setNotes(prevNotes => {
            return {
                ...prevNotes,
                [name]: value
            }
        })
    }
    function submitBtn(e) {
        e.preventDefault()
        props.onAdd(notes)
        setNotes({
            title:"",
            content:""
        })
    }
  return (
    <div>
      <form>
        <input 
            name="title"
            onChange={handleChange}
            value={notes.title} 
            placeholder="Title"
           />
        <textarea 
            name="content"
            onChange={handleChange} 
            value={notes.content}
            placeholder="Take a note..."
            rows="3" 
           />
        <button onClick={submitBtn}>Add</button>
      </form>
    </div>
  )
}
