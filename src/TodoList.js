import Todo from './Todo' // importしておく

const TodoList = ({todos, handleTodoClick}) => {
  return (
    <div className="todoList">
      {todos.map((todo) => <Todo todo={todo} key={todo.id} handleTodoClick={handleTodoClick}/>)}
    </div>
    );
};

export default TodoList;
