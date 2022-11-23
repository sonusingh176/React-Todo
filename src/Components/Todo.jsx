import React, { useState } from "react";
import Showtodo from "./ShowTodo";

function Todo() {
  const [task, setTask] = useState("add some task");
  const [data, setData] = useState([]);

  const onChangehandler = (event) => {
    setTask(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log("submit");

    const newData = task;
    setData([...data, newData]);
    setTask("");
  };

  return (
    <div className="container">
      <div className="todoHeader">
        <h2>Todo APP</h2>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="form-control"
            id="todo-input"
            value={task}
            onChange={onChangehandler}
          />
          <button type="submit" className="btn-submit">
            Add todo
          </button>
        </form>
        {data.map((value, index) => (
          <Showtodo key={index} id={index} task={value} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
{
  /* <Showtodo key={index} id={index} task={value} /> */
}
