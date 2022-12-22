import React from 'react'
import './style.css'
import TodoItem from './components/TodoItem'

export default function App() {
  return (
    <main>
      <h1>Todo List</h1>
      <ul>
        <TodoItem isComplete={true} title="Learn React components" />
        <TodoItem isComplete={true} title="Learn React props" />
        <TodoItem isComplete={false} title="Learn conditional rendering" />
      </ul>
    </main>
  )
}
