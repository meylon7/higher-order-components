import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
  let render = data.map((todo) => {
    return (
      <div key={todo.userId}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{render}</div>
    </div>
  );
};

const SearchTodo = HOC(TodoList, "todos");

export default SearchTodo;