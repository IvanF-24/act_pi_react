import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { weight, height } = await req.json();

  const heightInMeters = height / 100;
  const bmiValue = weight / (heightInMeters * heightInMeters);

  let category = "";
  if (bmiValue < 18.5) category = "Bajo peso";
  else if (bmiValue < 24.9) category = "Normal";
  else if (bmiValue < 29.9) category = "Sobrepeso";
  else category = "Obesidad";

  const bmi = bmiValue.toFixed(2);

  return NextResponse.json({ bmi, category });
}
