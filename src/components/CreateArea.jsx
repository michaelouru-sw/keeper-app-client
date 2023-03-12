// import React, { useState } from "react";
// import AddIcon from "@mui/icons-material/Add";
// import Input from "@mui/material/Input";
// import TextField from "@mui/material/TextField";
// import Fab from "@mui/material/Fab";
// import { Zoom } from "@mui/material";

// function CreateArea(props) {
// const [inputActive, setInputActive] = useState(false);
//   const [newNote, setNote] = useState({
//     title: "",
//     body: "",
//   });

// function changeInputState() {
//   setInputActive(true);
// }

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setNote((prevNote) => {
//       return {
//         ...prevNote,
//         [name]: value,
//       };
//     });
//   }

//   function submitForm(event) {
//     props.onAdd(newNote);
//     setNote({
//       title: "",
//       body: "",
//     });

//     event.preventDefault();
//   }

//   return (
//     <div>
//       <Zoom in={true}>
//         <form className="create-note">
//           {inputActive && (
//             <Input
//               name="title"
//               type="text"
//               placeholder="Title"
//               autoFocus={true}
//               fullWidth={true}
//               value={newNote.title}
//               onChange={handleChange}
//             />
//           )}
//           <Zoom in={true}>
//             <TextField
//               name="body"
//               maxRows="10"
//               onClick={changeInputState}
//               multiline={true}
//               fullWidth={true}
//               placeholder="Enter note"
//               variant="standard"
//               value={newNote.body}
//               onChange={handleChange}
//             ></TextField>
//           </Zoom>
//           {inputActive && (
//             <Fab onClick={submitForm}>
//               <AddIcon />
//             </Fab>
//           )}
//         </form>
//       </Zoom>
//     </div>
//   );
// }

// export default CreateArea;

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
          label="Title"
          value={title}
          onChange={handleTitleChange}
          autoFocus={true}
          variant="standard"
        />
      )}
      <br />
      <TextField
        fullWidth={true}
        id="body"
        name="body"
        label="Body"
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
