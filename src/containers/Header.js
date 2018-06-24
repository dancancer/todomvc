import React from 'react'
import { connect } from 'react-redux'
import TodoTextInput from '../components/TodoTextInput'

export const Header = ({ dispatch }) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          dispatch({type: 'todos/addTodo', payload: {text}})
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
)

export default connect()(Header)