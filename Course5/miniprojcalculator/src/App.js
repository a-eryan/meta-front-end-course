import { useState, useRef, useEffect} from "react"; 
import "./App.css";


function App() { 
  //Value of inital input and result values:
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  //Using the State Hook:
  // When we write:
  const [result, setResult] = useState(null);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme'); //gets the theme from local storage
    return savedTheme || 'light'; //if there is no theme in local storage, it will default to light
  })
  useEffect(() => { /*Use useEffect hook since we want the theme to affect the whole page, and not just React's territory (the root div) in order to modify the body tag. */
    /*This is known as a "side effect", since it's outside the bounds of our App. */
    document.body.className = theme;
  }, [theme]); //[theme] array tells React which value to watch for changes
  // We get:
  // result: the state variable (starts at 0)
  // setResult: a function to update that variable
  // Although we don't assign e, React creates and passes this event object whenever the button is clicked. (applies to all event handlers) 
  const [fact, setFact] = useState(null);
  const funFactURL = `https://numbersapi.p.rapidapi.com/random/trivia?min=0&max=999`;

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'b7991f3deemsh15e70cc409a0727p1aeba2jsn7465f6d0f906',
      'x-rapidapi-host': 'numbersapi.p.rapidapi.com'
    }
  };


  useEffect(() => {
    const fetchFact = async () => {
      try {
        const response = await fetch(funFactURL, options);
        const text = await response.text();  //using text() instead of json() since it wasn't even a JSON object 
        setFact(text);
      } catch (error) {
        console.error("Error fetching fact:", error);
      }
    }
    fetchFact();
}, []);
  
  
  function plus(e) { 
    e.preventDefault(); //Stops <form> submission/page refresh
    setResult((result) => result + Number(inputRef.current.value)); 
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
    e.preventDefault(); //Stops <form> submission/page refresh
    setResult(null);
  };

  function themeShifter() {
    if(theme === 'light') {
      setTheme('dark');
      document.body.className = 'dark';
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.body.className = 'light';
      localStorage.setItem('theme', 'light');
    }
}

  return ( 
    <div className={`App ${theme}`}>   
      <div>        
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}><b>Result:</b> {result} </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number here..." 
        /> 
        <button onClick={plus} title = "Addition">+</button>
         {/* Add the subtract button */} 
        <button onClick={minus} title = "Subtraction">−</button> 
        {/* Add the multiply button */}
        <button onClick={times} title = "Multiplication">×</button> 
        {/* Add the divide button */}
        <button onClick={divide} title = "Division">÷</button> 
        {/* Add the resetInput button */}
        <button onClick={resetInput}>Reset Input</button>         
        {/* Add the resetResult button */}
        <button onClick={resetResult}>Reset Result</button>         
      </form>
      <button onClick={themeShifter}>Switch Themes</button>
    <footer><b>Fun Fact:</b> {fact}</footer>
    </div> 
  ); 
} 

export default App; 