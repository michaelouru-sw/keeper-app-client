import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const CreateArea = (props) => {
  const [inputActive, setInputActive] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function changeInputState() {
    setInputActive(true);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/submitnote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, body }),
      });

      const data = await response.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setBody("");
    window.location.reload();
  };

  const handleTitleChange = (event) => setTitle(event.target.value);

  const handleBodyChange = (event) => setBody(event.target.value);

  return (
    <form onSubmit={handleSubmit} className="create-note">
      {inputActive && (
        <TextField
          fullWidth={true}
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
          autoFocus={true}
          variant="standard"
          placeholder="Title"
        />
      )}
      <br />
      <TextField
        fullWidth={true}
        id="body"
        name="body"
        multiline
        rows={inputActive ? 4 : 1}
        onClick={changeInputState}
        value={body}
        onChange={handleBodyChange}
        variant="filled"
        placeholder="Add note"
      />
      <br />
      {inputActive && (
        <Fab onClick={handleSubmit}>
          <AddIcon />
        </Fab>
      )}
    </form>
  );
};

export default CreateArea;
