import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo } from "../store";
import ToDo from "../components/ToDo";

function Home() {
  const [text, setText] = useState("");
  const toDo = useSelector((state) => state);
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
    dispatch(addToDo(text));
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDo.map((td) => (
          <ToDo {...td} key={td.id} />
        ))}
      </ul>
    </>
  );
}

export default Home;
