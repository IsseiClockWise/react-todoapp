// import React from 'react'

const Todo = ({todo, handleTodoClick}) => {
  const TodoClick = () => {
    handleTodoClick(todo.id)
  };

  return (
    <div>
        <label>
            <input type="checkbox" onChange={TodoClick}/>
        </label>
        {todo.name}
    </div>
  );
};

export default Todo;
