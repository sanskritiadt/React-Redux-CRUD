// import {
//   useState,
//   useRef
// } from "react";
// import "./App.css";

// function App() {
//   const inputRef = useRef(null);
//   const resultRef = useRef(null);
//   const [result, setResult] = useState(0);

//   function plus(e) {
//       e.preventDefault();
//       setResult((result) => result + Number(inputRef.current.value));
//   };

//   function minus(e) {
//       // Add the code for the minus function 
//       e.preventDefault();
//       setResult((result) => result - Number(inputRef.current.value));
//   };

//   function times(e) {
//       // Add the code for the plus function 
//       e.preventDefault();
//       setResult((result) => result * Number(inputRef.current.value));
//   };

//   function divide(e) {
//       // Add the code for the divide function 
//       e.preventDefault();
//       setResult((result) => result / Number(inputRef.current.value));
//   };

//   function resetInput(e) {
//       // Add the code for the resetInput function 
//       if (e) {
//           e.preventDefault();
//       }
//       inputRef.current.value = "";
//   };

//   function resetResult(e) {
//       // Add the code for the resetResult function 
//       if (e) {
//           e.preventDefault();
//       }
//       setResult(0);
//       resetInput();
//   };

//   return (
//       <div className="App">
//           <div>
//               <h1>Simplest Working Calculator</h1>
//           </div>
//           <form>
//               <p ref={resultRef}>
//                   {result}
//               </p>
//               <input
//                   pattern="[0-9]"
//                   ref={inputRef}
//                   type="number"
//                   placeholder="Type a number"
//               />
//               <button onClick={plus}>add</button>
//               <button onClick={minus}>subtract</button>
//               <button onClick={times}>multiply</button>
//               <button onClick={divide}>divide</button>
//               <button onClick={resetInput}>reset input</button>
//               <button onClick={resetResult}>reset result</button>
//           </form>
//       </div>
//   );
// }

// export default App;
import React from 'react'

const App = () => {
    return (
        <div>
            <h1>{process.env.REACT_APP_TITLE}</h1>
            <h3>{process.env.REACT_APP_DESCRIPTION}</h3>
            <p>{process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}</p>
        </div>
    )
}

export default App