import React, { useState } from "react";
import { connect } from "react-redux";

function Home({ toDos }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

function mapStateToProps(state) {
  // 뭔가를 store에서 가져오고 싶을 떄 사용 => 가져와서 component의 props에 넣음
  // 첫 번째 argument: store에서 state를 가져옴
  // 두 번째 argument: component의 props
  return { toDos: state };
}

export default connect(mapStateToProps)(Home); // 두 개의 argument를 가지는 connect(state, dispatch)
