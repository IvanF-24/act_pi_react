"use client";

import { useState } from "react";
import "./BmiForm.css"; // Importamos el CSS

export default function BmiForm() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/bmi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        weight: Number(weight),
        height: Number(height),
      }),
    });

    const data = await response.json();
    setResult(`Tu IMC es ${data.bmi} (${data.category})`);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Calculadora de IMC</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="number"
          placeholder="Peso en kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="input"
          required
        />
        <input
          type="number"
          placeholder="Altura en cm"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="input"
          required
        />
        <button type="submit" className="button">
          Calcular
        </button>
      </form>

      {result && <p className="result">{result}</p>}
    </div>
  );
}
