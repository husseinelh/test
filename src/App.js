// App.jsx
import Child from "./Child";
import { useState, useEffect } from "react";

const App = () => { // upon re-render in functional components, the function App is being invoked again (except for the hooks that get cache) whereas the class would avoid this problem by entering the render()  

  const [value, setValue] = useState(true);

  // initializes all functions & variables

  // for some functions, it's better to be in useContext, to be invoked depending on a certain dependancy
  // for some variables, it's better to be used with useRef

  useEffect(() => { // runs after each re-render, runs on componentDidMount
    console.log('PARENT, each render');
  })

  useEffect(() => { // runs after changing 'value', runs on componentDidMount
    console.log('PARENT, each \'value change\' render');
  }, [value])

  useEffect(() => { // runs on componentDidMount
    console.log('PARENT, render on componentDidMount');
    changeBooleanValue(false);
  }, [])

  const changeBooleanValue = (param) => {
    setValue(param);
  }

  // shouldComponentUpdate here is automatically called if we have changes in states/props

  return (
    <>
      <h1>Parent</h1>
      <Child setBooleanValue={changeBooleanValue} />
      {/* <Child setBooleanValue={changeBooleanValue}/> after mounting in each component, it exits and goes to another component after it, until all components are mounted. Only then it will check for any state/prop changes */}
      <button style={{ 'display': 'block', 'marginTop': '10px' }} onClick={() => setValue(!value)}>Click Me Parent</button>
    </>
  )
}

export default App;