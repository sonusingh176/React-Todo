import React from "react";
function Showtodo(props) {
  return (
    <div className="todoitem">
      <h5>{props.task}</h5>
      <button className="deletetodo">del</button>
    </div>
  );
}
export default Showtodo;
