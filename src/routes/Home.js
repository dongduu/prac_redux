import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  // store.getState()
  // 뭔가를 store에서 가져오고 싶을 떄 사용 => 가져와서 component의 props에 넣음
  // 첫 번째 argument: store에서 state를 가져옴
  // 두 번째 argument: component의 props
  console.log(state);
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); // 두 개의 argument를 가지는 connect(state, dispatch)
// export default connect(null, mapDispatchProps)(Home) => mapState는 필요하지 않고 dispatch는 필요할 때
