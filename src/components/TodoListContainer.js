import React from "react";
import TodoItem from "./TodoItem";
import classes from "./TodoListContainer.module.css";

const DUMMY_Todos = [
  {
    id: Math.floor(Math.random() * 10000),
    title: "공부하기",
    checked: true,
  },
  {
    id: Math.floor(Math.random() * 10000),
    title: "밥먹기",
    checked: true,
  },
  {
    id: Math.floor(Math.random() * 10000),
    title: "강의보기",
    checked: false,
  },
  {
    id: Math.floor(Math.random() * 10000),
    title: "카페가기",
    checked: false,
  },
  {
    id: Math.floor(Math.random() * 10000),
    title: "청소하기",
    checked: false,
  },
];
function TodoListContainer() {
  return (
    <div className={classes.TodoListContainer}>
      <ul>
        {DUMMY_Todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              checked={todo.checked}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoListContainer;
