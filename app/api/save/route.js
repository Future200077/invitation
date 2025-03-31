import { NextResponse } from "next/server";
import { query } from "@/utils/db";

export async function GET() {
  try {
    const users = await query("SELECT * FROM savedUsers");
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Database error", error },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { login, avatar_url, html_url } = await req.json();

    // Check if the user already exists
    const existingUser = await query("SELECT * FROM savedUsers WHERE login = ?", [login]);

    if (existingUser.length > 0) {
      return NextResponse.json(
        { success: false, message: "User already saved" },
        { status: 200 }
      );
    }

    // Insert new user
    await query(
      "INSERT INTO savedUsers (login, avatar_url, html_url) VALUES (?, ?, ?)",
      [login, avatar_url, html_url]
    );

    return NextResponse.json(
      { success: true, message: "User saved" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Database error", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { login } = await req.json();

    await query("DELETE FROM savedUsers WHERE login = ?", [login]);

    return NextResponse.json(
      { success: true, message: "User removed" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Database error", error },
      { status: 500 }
    );
  }
}
