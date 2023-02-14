import React from 'react'
import notes from './../notes'

function createNote(props){
    return (
        <Note
        key = {props.key}
        title = {props.title}
        content = {props.content}
    />
    );
}
export const listOfNotes = notes.map(createNote)

function Note(props) {
   
  return (
    <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
  )
}

