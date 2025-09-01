import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { weight, height } = await req.json();

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let category = "";
  if (bmi < 18.5) category = "Bajo peso";
  else if (bmi < 24.9) category = "Normal";
  else if (bmi < 29.9) category = "Sobrepeso";
  else category = "Obesidad";

  return NextResponse.json({ bmi, category });
}
