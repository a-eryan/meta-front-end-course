import { useState,useRef} from "react"; 
import "./App.css";

function App() { 
  //Value of inital input and result values:
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  //Using the State Hook:
  // When we write:
  const [result, setResult] = useState(3);

  // We get:
  // result: the state variable (starts at 0)
  // setResult: a function to update that variable
  // Although we don't assign e, React creates and passes this event object whenever the button is clicked. (applies to all event handlers) 
  function plus(e) { 
    e.preventDefault(); //Stops <form> submission/page refresh
    setResult((result) = result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
  	e.preventDefault(); //Stops <form> submission/page refresh
    setResult((result) => result - Number(inputRef.current.value));  
  };
 
  function times(e) { 
    e.preventDefault(); //Stops <form> submission/page refresh
    setResult((result) => result * Number(inputRef.current.value));   
  }; 
 
  function divide(e) { 
    e.preventDefault(); //Stops <form> submission/page refresh
    setResult((result) => result / Number(inputRef.current.value));    
  };
 
  function resetInput(e) { 
    // Add the code for the resetInput function 
    e.preventDefault(); //Stops <form> submission/page refresh
    (inputRef.current.value) = null;
  }; 
 
  function resetResult(e) {
    e.preventDefault();
    setResult(null);
  }; 
 
  return ( 
    <div className="App"> 
      <div>         {/* Add the subtract button */}
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>Result: {result} </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>Add</button> 
        {/* Add the subtract button */}
        <button onClick={minus}>Minus</button> 
        {/* Add the multiply button */}
        <button onClick={times}>Multiply</button> 
        {/* Add the divide button */}
        <button onClick={divide}>Divide</button> 
        {/* Add the resetInput button */}
        <button onClick={resetInput}>Reset Input</button>         
        {/* Add the resetResult button */}
        <button onClick={resetResult}>Reset Result</button>         
      </form> 
    </div> 
  ); 
} 
 
export default App; 
