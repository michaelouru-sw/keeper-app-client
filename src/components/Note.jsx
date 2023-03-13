import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import { CardActions, CardContent } from "@mui/material";

function Note(props) {
  async function deleteNote(event) {
    props.onDelete(props.id);
    console.log(event.body);
  }

  return (
    <div className="note">
      <Card>
        <CardContent>
          <h2>{props.title}</h2>
          <p>{props.body}</p>
        </CardContent>
        <CardActions>
          <button onClick={deleteNote}>
            <DeleteIcon></DeleteIcon>
          </button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Note;
