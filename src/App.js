import "./styles.css";
import { useState } from "react";

var styleItem = {
  border: "1px solid blue",
  padding: "0.3rem",
  width: "0.5rem",
  height: "0.5rem"
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
      <h1>Cash Register Manager</h1>
      <p>
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return:
      </p>
      <h3>Bill amount:</h3>
      <input onChange={billEventHandler}></input>
      <h3>Cash given:</h3>
      <input onChange={cashEventHandler}></input>
      <div>
        <button onClick={clickEventHandler}>Check</button>
      </div>
      <h3>Return Change</h3>
      <div>{displayStatement}</div>
      <table>
        <tbody>
          <tr>
            <tc
              style={{
                border: "1px solid blue",
                padding: "0.3rem",
                width: "0.5rem",
                height: "0.5rem"
              }}
            >
              <td>No. of notes</td>
            </tc>
            <tc
              style={{
                border: "1px solid blue",
                padding: "0.3rem",
                width: "0.5rem",
                height: "0.5rem"
              }}
            >
              <td>{twoThousand}</td>
            </tc>
            <tc
              style={{
                border: "1px solid blue",
                padding: "0.3rem",
                width: "0.5rem",
                height: "0.5rem"
              }}
            >
              <td>{fiveHundred}</td>
            </tc>
            <tc style={styleItem}>
              <td>{hundred}</td>
            </tc>
            <tc style={styleItem}>
              <td>{twenty}</td>
            </tc>
            <tc style={styleItem}>
              <td>{ten}</td>
            </tc>
            <tc style={styleItem}>
              <td>{five}</td>
            </tc>
            <tc style={styleItem}>
              <td>{one}</td>
            </tc>
          </tr>
          <tr>
            <tc style={styleItem}>
              <td>Note</td>
            </tc>
            <tc style={styleItem}>
              <td>2000</td>
            </tc>
            <tc style={styleItem}>
              <td>500</td>
            </tc>
            <tc style={styleItem}>
              <td>100</td>
            </tc>
            <tc style={styleItem}>
              <td>20</td>
            </tc>
            <tc style={styleItem}>
              <td>10</td>
            </tc>
            <tc style={styleItem}>
              <td>5</td>
            </tc>
            <tc style={styleItem}>
              <td>1</td>
            </tc>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
