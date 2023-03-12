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
    fetch("http://localhost:3001/notes")
      .then((response) => response.json())
      .then((notes) => setNotes(notes))
      .catch((error) => console.log(error));
  }, []);

  // async function addNewNote(event, title, body) {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch("http://localhost:3001/submitnote", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ title, body }),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <div>
      <Header></Header>
      <CreateArea />
      {notes.map((note, index) => {
        return <Note title={note.title} body={note.body} key={index}></Note>;
      })}
      <Footer></Footer>
    </div>
  );
}

export default App;
