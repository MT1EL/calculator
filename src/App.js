import "./App.css";
import React from "react";

function App() {
  const [calc, setCalc] = React.useState("");
  const [result, setResult] = React.useState("");

  const buttons = [
    "AC",
    "/",
    "*",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "=",
    "0",
    ".",
  ];
  const operator = ["/", "*", "+", "-", "."];
  const sum = ["=", "AC"];
  const updateCalc = (value) => {
    if (operator.includes(value) && calc === "") {
      return;
    }
    if (
      operator.includes(value) &&
      operator.includes(calc.toString().slice(-1))
    ) {
      setCalc(calc.replace(calc.charAt(calc.length - 1), value));
    } else {
      setCalc(calc + value);
    }
    if (!operator.includes(value) && !sum.includes(value)) {
      setResult(eval(calc + value));
    }

    if (value === "=") {
      // console.log(result);
      setCalc(result);
    }
    if (value === "AC") {
      setCalc("");
      setResult("");
    }
  };
  return (
    <div className="App">
      <div className="container">
        <div className="screen">
          <p>{calc}</p>
          <p>{result}</p>
        </div>
        <div className="buttons">
          {buttons.map((item) => {
            return (
              <button key={item} onClick={() => updateCalc(item)}>
                {item}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <p className="author">Design by: Peter Weinberg</p>
        <p className="author">code by: tornike</p>
      </div>
    </div>
  );
}

export default App;
