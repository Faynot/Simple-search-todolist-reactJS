import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSearch, BsPlus } from 'react-icons/bs';
import { addTodo, updateSearchTerm } from '../../redux/actions';
import TodoList from '../TodoList/TodoList';
import FilterButtons from '../../FilterButtons/FilterButtons';
import './Todo.css';

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      handleAddTodo(newTodoText.trim());
      setNewTodoText('');
    }
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    dispatch(updateSearchTerm(value));
  };

  return (
    <div className='container'>
      <div className="main-container">
        <h2 className='name'>Simple ToDo APP</h2>
        <div className="flex items-center mb-4">
          <input
            id="addTodoInput"
            className="form"
            type="text"
            placeholder="Add Todo"
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
          />
          <button
            className="btn-add"
            onClick={handleAddTodoClick}
          >
            <BsPlus size={20} />
          </button>
        </div>

        <div>
          <FilterButtons />
          <div>
            <input
              className="form-search"
              type="text"
              placeholder="Search Todos"
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            <button className="btn-search">
              <BsSearch size={20} />
            </button>
          </div>
        </div>

        <TodoList />
      </div>
    </div>
  );
};

export default Todo;