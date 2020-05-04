import React from 'react';
import './App.css';
import Button from 'button';
import List from "list";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Button secondClass="plus" text="+" />
      <List />
    </div>
  );
}

export default App;
