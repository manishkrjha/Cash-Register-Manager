import "./styles.css";
import { useState } from "react";

var styleItem = {
  border: "1px solid blue",
  padding: "0.3rem",
  width: "0.5rem",
  height: "0.5rem"
};

var inputStyling = {
  border: "2px solid #7c3aed",
  borderRadius: "0.4rem",
  padding: "0.5rem"
};

var buttonStyling = {
  marginTop: "0.6rem",
  backgroundColor: "#7c3aed",
  padding: "0.6rem",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "0.3rem"
};

export default function App() {
  const [billInput, setBillInput] = useState(0);
  const [cashInput, setCashInput] = useState(0);
  const [displayStatement, setDisplayStatement] = useState("");

  var noteVal = [2000, 500, 100, 20, 10, 5, 1];
  var non = [0, 0, 0, 0, 0, 0, 0];

  //note values
  const [twoThousand, setTwoThousand] = useState(0);
  const [fiveHundred, setFiveHundred] = useState(0);
  const [hundred, setHundred] = useState(0);
  const [twenty, setTwenty] = useState(0);
  const [one, setOne] = useState(0);
  const [ten, setTen] = useState(0);
  const [five, setFive] = useState(0);

  function billEventHandler(event) {
    setBillInput(event.target.value);
  }

  function cashEventHandler(event) {
    if (billInput === 0) {
      alert("Enter bill amount first!");
      event.target.value = "";
    } else {
      setCashInput(event.target.value);
    }
  }

  function billUpdater() {
    var diff = cashInput - billInput;

    for (let i = 0; i < 6; i++) {
      if (diff === 0) {
        non[i] = 0;
      } else {
        if (noteVal[i] > cashInput) {
          non[i] = 0;
        } else {
          non[i] = Math.floor(diff / noteVal[i]);
          diff = diff % noteVal[i];
        }
      }
    }
  }

  function clickEventHandler() {
    if (billInput > cashInput) {
      setDisplayStatement("Do you want to wash plates?");
    } else {
      billUpdater();

      setTwoThousand(non[0]);
      setFiveHundred(non[1]);
      setHundred(non[2]);
      setTwenty(non[3]);
      setTen(non[4]);
      setFive(non[5]);
      setOne(non[6]);
    }
  }

  return (
    <div className="App">
      <h1 style={{ color: "#7c3aed" }}>Cash Register Manager</h1>
      <p>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return:
      </p>
      <h3>Bill amount:</h3>
      <input style={inputStyling} onChange={billEventHandler}></input>
      <h3>Cash given:</h3>
      <input style={inputStyling} onChange={cashEventHandler}></input>
      <div>
        <button style={buttonStyling} onClick={clickEventHandler}>
          Check
        </button>
      </div>
      <h3>Return Change</h3>
      <div>{displayStatement}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginLeft: "15rem",
          marginRight: "15rem"
        }}
      >
        <div style={{ flex: "1", display: "flex" }}>
          <div
            style={{
              flex: "1",
              border: "1px solid #7c3aed",
              width: "1.5rem",
              height: "2.5rem"
            }}
          >
            No. of notes
          </div>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>
            {twoThousand}
          </div>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>
            {fiveHundred}
          </div>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>
            {hundred}
          </div>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>{twenty}</div>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>{ten}</div>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>{five}</div>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>{one}</div>
        </div>
        <div style={{ flex: "1", display: "flex" }}>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>Note</div>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>2000</div>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>500</div>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>100</div>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>20</div>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>10</div>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>5</div>
          <div style={{ flex: "1", border: "1px solid #7c3aed" }}>1</div>
        </div>
      </div>
    </div>
  );
}
