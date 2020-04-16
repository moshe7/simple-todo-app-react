import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import TodosList from './TodosList';
import InputTodo from './InputTodo';
import Header from './Header';

const TodoContainer = (prop) => {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);

  const handleChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
    setShow(!show);
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
    // axios
    //   .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    //   .then((reponse) =>
    //     this.setState({
    //       todos: [
    //         ...this.state.todos.filter((todo) => {
    //           return todo.id !== id;
    //         }),
    //       ],
    //     })
    //   );
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos({
      todos: [...todos, newTodo],
    });

    // axios
    //   .post('https://jsonplaceholder.typicode.com/todos', {
    //     title: title,
    //     completed: false,
    //   })
    //   .then((response) =>
    //     this.setState({
    //       todos: [...this.state.todos, response.data],
    //     })
    //   );
  };

  // componentDidMount() {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then((response) => this.setState({ todos: response.data }));
  // }

  useEffect(() => {
    console.log('test run');
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then((response) => setTodos(response.data));
  }, []);

  return (
    <div className="container">
      <Header headerSpan={show} />
      <InputTodo addTodoProps={addTodoItem} />
      <TodosList
        todos={todos}
        handleChangeProps={handleChange}
        deleteTodoProps={delTodo}
      />
    </div>
  );
};

export default TodoContainer;
