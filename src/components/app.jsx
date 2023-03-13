import React, { useState, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Container from "@mui/material/Container";
// import notes from "../notes";
import Login from "./login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/notes")
      .then((response) => response.json())
      .then((notes) => setNotes(notes))
      .catch((error) => console.log(error));
  }, []);

  async function deleteNote(id) {
    try {
      const response = await fetch("http://localhost:3001/api/note/", {
        method: "DELETE",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();
      window.location.reload();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <Header></Header>
      <CreateArea />
      {notes.map((note, index) => {
        return (
          <Note
            title={note.title}
            body={note.body}
            key={index}
            id={note._id}
            onDelete={deleteNote}
          ></Note>
        );
      })}
      <Footer></Footer>
    </div>
  );
}

// setInterval(() => {
//   window.location.reload();
// }, 500);

export default App;
