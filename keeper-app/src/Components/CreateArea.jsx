import React, { useState } from "react";

const CreateArea = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  

  function handleChange(event) {
    const {name, value} = event.target;

    setNote(prevNote => {
        return{
            ...prevNote,
            [name]: value
        }
    })

  }

  function submitNote(event) {

    props.onAdd(note);
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          value={note.title}
          type="text"
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          type="text"
          placeholder="Take a note..."
          onChange={handleChange}
        />
        <button onClick = {submitNote}>Add</button>
      </form>
    </div>
  );
};

export default CreateArea;
