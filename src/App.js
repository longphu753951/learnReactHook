import React, { useEffect, useState, useRef } from "react";

const App = () => {

  const [name, setName] = useState('');
  const renderCount = useRef(0);
  const inputRef = useRef();
  const prevName = useRef('');

  const focus = () => {
    inputRef.current.focus();
  }

  useEffect(() => {
    renderCount.current += 1;
  })

  useEffect(() => {
    prevName.current = name;
  }, [name])

  return(
    <>
      <input ref ={inputRef} value = {name} onChange = { e => setName(e.target.value)} />
      <div>My name is {name} and it used to be {prevName.current}</div>
      <div>Render count: {renderCount.current}</div>
      <button onClick={focus}>Focus</button>
    </>
  )
}

export default App;