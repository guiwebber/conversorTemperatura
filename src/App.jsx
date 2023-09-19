import "./App.css";
import { useState } from "react";
function App() {
  let [temperatura, setTemperatura] = useState("");

  let [conversaoF, setConversaoF] = useState("");
  let [conversaoK, setConversaoK] = useState("");
  let [conversaoC, setConversaoC] = useState("");

  const [selectedValue, setSelectedValue] = useState("C");

  const list = [
    { id: 1, value: "C", name: "Celsius" },
    { id: 2, value: "F", name: "Fahrenheit" },
    { id: 3, value: "K", name: "Kelvin" },
  ];

  const handleConverte = () => {
    if (selectedValue === "C" && temperatura !== "") {
      setConversaoC(parseFloat(temperatura).toFixed(2));
      setConversaoF(parseFloat((temperatura * 9) / 5 + 32).toFixed(2));
      setConversaoK(parseFloat(Number(temperatura) + 273.15));
    } else if (selectedValue === "K" && temperatura !== "") {
      setConversaoC(parseFloat(temperatura - 273.15).toFixed(2));
      setConversaoK(parseFloat(temperatura).toFixed(2));
      setConversaoF(parseFloat(temperatura * 1.8 - 459.67).toFixed(2));
    } else if (selectedValue === "F" && temperatura !== "") {
      setConversaoC(parseFloat((temperatura - 32) / 1.8).toFixed(2));
      setConversaoK(
        parseFloat(((temperatura - 32) * 5) / 9 + 273.15).toFixed(2)
      );
      setConversaoF(parseFloat(temperatura).toFixed(2));
    }
  };

  const handleNovaConversao = () => {
    setConversaoC("");
    setConversaoK("");
    setConversaoF("");
    setTemperatura("");
    setSelectedValue("C");
  };

  const handleTemperatura = (valorTecla) => {
    if (valorTecla === "-" && temperatura.length !== 0) {
      return false;
    }
    if (valorTecla === "." && temperatura.includes(".")) {
      return false;
    }

    if (valorTecla === "." && (temperatura === "" || temperatura === "-")) {
      setTemperatura(temperatura + "0.");
      return true;
    }

    setTemperatura(temperatura + valorTecla);
  };

  const handleBackspace = () => {
    temperatura = temperatura.slice(0, -1);
    setTemperatura(temperatura);
  };
  return (
    <div className="container">
      <div className="box">
        <div className="titleBox">
          <h1>Conversor de temperatura</h1>
        </div>
        <div className="flex">
          <div className="alignLeft">
            <div className="selectDiv">
              <p className="borderB first">{temperatura}</p>
              <select
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                name="typeTemp"
                id="typeTemp"
              >
                {list.map((item) => (
                  <option key={item.id} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flexzada">
              <p className="borderB"> {conversaoC}</p>
              <p className="graus">°C</p>
            </div>
            <div className="flexzada">
              <p className="borderB">{conversaoF}</p>
              <p className="graus">°F</p>
            </div>
            <div className="flexzada">
              <p className="borderB"> {conversaoK}</p>
              <p className="graus">°K</p>
            </div>
            <button
              onClick={() => handleConverte()}
              className="titleBox btnConverter"
            >
              Converter
            </button>
          </div>
          <div className="buttons">
            <button onClick={() => handleTemperatura(1)}>1</button>
            <button onClick={() => handleTemperatura(2)}>2</button>
            <button onClick={() => handleTemperatura(3)}>3</button>
            <button onClick={() => handleTemperatura(4)}>4</button>
            <button onClick={() => handleTemperatura(5)}>5</button>
            <button onClick={() => handleTemperatura(6)}>6</button>
            <button onClick={() => handleTemperatura(7)}>7</button>
            <button onClick={() => handleTemperatura(8)}>8</button>
            <button onClick={() => handleTemperatura(9)}>9</button>
            <button onClick={() => handleTemperatura(0)}>0</button>
            <button onClick={() => handleBackspace()}>Back</button>
            <button onClick={() => handleTemperatura(".")}>.</button>
            <button onClick={() => handleTemperatura("-")}>-</button>
            <button onClick={() => handleNovaConversao()} className="newBtn">
              Nova conversão
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
