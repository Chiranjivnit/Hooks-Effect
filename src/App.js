import React from 'react';
import './App.css';
import MouseContainer from './component/MouseContainer';
import IntervalhookCounter from './component/IntervalhookCounter';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <MouseContainer/> */}
        <IntervalhookCounter/>
      </header>
    </div>
  );
}

export default App;
