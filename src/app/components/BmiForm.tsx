"use client";

import { useState } from "react";

export default function BmiForm() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [result, setResult] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("/api/bmi", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ weight: Number(weight), height: Number(height) }),
        });

        const data = await response.json();
        setResult(`Tu IMC es ${data.bmi} (${data.category})`);
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Calculadora de IMC</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="number"
                    placeholder="Peso en kg"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="border p-2 rounded-lg"
                    required
                />
                <input
                    type="number"
                    placeholder="Altura en cm"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="border p-2 rounded-lg"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                >
                    Calcular
                </button>
            </form>

            {result && (
                <p className="mt-4 text-lg font-medium text-center text-gray-700">
                    {result}
                </p>
            )}
        </div>
    );
}