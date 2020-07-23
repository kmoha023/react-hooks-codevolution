import React from 'react';
import logo from './logo.svg';
import './App.css';

import DataFetching from './components/counter/dataFetching'
import Counter  from './components/counter/counter';
import CounterWithPreviousState from './components/counter/counterWithPreviousState';
import CounterWithObjectState from './components/counter/counterWithObjectState';
import CounterWithArrayState from './components/counter/counterWithArrayState';

function App() {

  return (
    <div className="App">
      <DataFetching />
      {/* <CounterWithArrayState /> */}
      {/* <CounterWithObjectState /> */}
      {/* <CounterWithPreviousState />  */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
