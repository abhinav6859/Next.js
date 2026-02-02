import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email, password } = body;

  return NextResponse.json({
    success: true,
    message: "User registered",
    data: { email, password }
  });
}
