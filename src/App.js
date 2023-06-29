import {useState, useRef} from 'react';
import TodoList from './TodoList';
import {v4 as uuidv4} from 'uuid'; //importする

function App() {
  const [todos, setTodos] = useState([]); //からの配列に修正

  const todoNameRef = useRef();
  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (name === "") {return};

    setTodos([...todos, {id:uuidv4(), name:name, completed:false}]);
    todoNameRef.current.value = null;
  };

  //Todo.jsのonClickで実行する関数
  const handleTodoClick = (id) =>{
    const newtodos = todos; //もとを更新すると良くないのでコピー
    const todo = newtodos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos([...newtodos]);
  };

  const handleDelTodo = () => {
    const newtodos = todos.filter(todo => todo.completed === false);
    setTodos(newtodos);
  };

  return (
    <div>
      <TodoList todos={todos} handleTodoClick={handleTodoClick}/>
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleDelTodo}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter(todo => todo.completed === false).length}</div>
    </div>
  );
}

export default App;
