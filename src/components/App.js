import React, { Component, useState } from "react";
import "../styles/App.css";

// class App extends Component {
//     render() {

//         return(
//             <div id="main">
//                {/* Do not remove the main div */}
//             </div>
//         )
//     }
// }

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculateRelationship = () => {
    if (!name1 || !name2) {
      setResult("Please Enter valid input");
      return;
    }

    const count = removeCommonLetters(name1, name2);
    const relationship = getRelationship(count);
    console.log(relationship);
    setResult(relationship);
  };

  const removeCommonLetters = (str1, str2) => {
    const arr1 = str1.split("");
    const arr2 = str2.split("");

    // arr1.forEach((char) => {
    //   const index = arr2.indexOf(char);
    //   if (index !== -1) {
    //     arr2.splice(index, 1);
    //   }
    // });

    // return arr1.length + arr2.length;
    const count = arr1.filter((char) => !arr2.includes(char)).join("");
    return count.length;
  };

  const getRelationship = (count) => {
    const flames = [
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
      "Siblings",
    ];
    const res = flames[(count - 1) % 6];
    console.log(res);
    return res;
    // return flames[count % 6];
  };

  const clearFields = () => {
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div className="App">
      <h1>FLAMES Game</h1>
      <input
        data-testid="input1"
        type="text"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
        placeholder="Enter first name"
      />
      <input
        data-testid="input2"
        type="text"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
        placeholder="Enter second name"
      />
      <button
        data-testid="calculate_relationship"
        onClick={calculateRelationship}
      >
        Calculte Relationship
      </button>
      <button data-testid="clear" onClick={clearFields}>
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
};

export default App;
