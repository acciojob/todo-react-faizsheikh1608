import React from "react";

const ToDoData = function (props) {
  const { value } = props;
  console.log(value);
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
};

export default ToDoData;
