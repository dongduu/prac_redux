import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const id = useParams().id;
  const toDos = useSelector((state) => state);
  console.log(toDos);
  const toDoText = toDos.find((toDo) => toDo.id === parseInt(id));
  console.log(toDoText);
  return (
    <>
      <h1>{toDoText?.text}</h1>
      <h5>Created at : {toDoText?.id}</h5>
    </>
  );
}

export default Detail;
