import React, {Component}from 'react';

function App() {
  const greeting = 'Hi!!'
  const dom = <h1 className='foo'>{greeting}</h1>
  const input = <input type="text" onChange={()=> {console.log('I am clixked.')}}/>
  const label = <label htmlFor='bar'>bar</label>
  return (
    <React.Fragment>
      {input}
      {label}
    </React.Fragment>
  );
}

export default App;
