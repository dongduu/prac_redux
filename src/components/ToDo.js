import React from "react";

function ToDo({ text }) {
  return (
    <li>
      {text}
      <button>DELETE</button>
    </li>
  );
}

export default ToDo;
