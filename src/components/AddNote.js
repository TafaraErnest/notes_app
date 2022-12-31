import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [notetext, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (notetext.trim().length > 0) {
      handleAddNote(notetext);
      setNoteText("");
    }
    setNoteText("");
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add note"
        value={notetext}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - notetext.length} remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
