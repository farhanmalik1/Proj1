import "./styles.css";
import { useState } from "react";

export default function App() {
  const [amount, setAmnount] = useState({ pkr: 0, usd: 0 });

  const handleCurrency = (e) => {
    const { name, value } = e.target;
    if (name === "pkr") setAmnount({ [name]: value, usd: value / 170 });
    if (name === "usd") setAmnount({ [name]: value, pkr: value * 170 });
  };
  return (
    <div className="App">
      <label>Pkr</label>
      <input value={amount.pkr} onChange={handleCurrency} name="pkr" />
      <br />
      <br />
      <br />
      <label>Usd</label>
      <input value={amount.usd} onChange={handleCurrency} name="usd" />
    </div>
  );
}
