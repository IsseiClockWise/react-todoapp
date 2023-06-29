// import React from 'react'

const Todo = ({todo, handleTodoClick}) => {
  const TodoClick = () => {
    handleTodoClick(todo.id)
  };

  return (
    <div className="todo">
      <label>
        <input type="checkbox" onChange={TodoClick}/>
        <span>{todo.name}</span>
      </label>
    </div>
  );
};

export default Todo;
