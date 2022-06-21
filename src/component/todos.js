import React from "react";
import "../component/todos.css";
import { Card, CardContent, Grid } from "@mui/material";
import {ListItemButton, ListItemText} from "@mui/material"; /****HERE****import ListItemButton & ListItemText from the material UI library*******/
import {Checkbox} from "@mui/material"; /****HERE****import Checkbox from the material UI library*******/

// 1. This component formats and returns the list of todos.
// 2. Treat the question mark like an if statement.
// If the todos array has items in the list [todos.length], we want to return the list
// Else, return a message saying "You have no todo's left"
// 3. The map function is called to assign each array item with a key
// 4. Think of lines 14-23 as a loop. For each todo in the todo list, we want to give the list item
// a key, and it's own card shown in the UI
const Todos = ({ todos, deleteToDo }) => { /****HERE****Add deleteTodo as a new property to the Todos component*******/
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <Grid key={todo.id}>
          <Card style={{marginTop:10}}> /****HERE****Add style to the Card component*******/
            {/* Remember, we set the local state of this todo item when the user submits the form in 
            AddTodo.js. All we need to do is return the todo list item {todo.content} */}
            <ListItemButton component="a" href="#simple-list">
            <Checkbox style={{ paddingLeft: 0 }} color="primary" onClick={()=> deleteToDo(todo.id)}/>  /****HERE****Add an onClick event handler *******/ /****HERE****Add a Checkbox component and style property set to paddingLeft:0 and a color property set to primary*******/
              <ListItemText primary={todo.content} secondary={todo.date}/>
            </ListItemButton>
          </Card>
        </Grid>
      );
    })
  ) : (
    <p>{"You have no todo's left"}</p>
  );
  // Lastly, return the todoList constant that we created above to show all of the items on the screen.
  return (
    <div className="todoCollection" style={{ padding: "10px" }}>
      {todoList}
    </div>
  );
};

export default Todos;
