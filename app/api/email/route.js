import connectDB from "@/Lib/config/db";
import EmailModel from "@/Lib/models/emailModel";
import { NextResponse } from "next/server";

// connect only once
let isConnected = false;
const loadDB = async () => {
  if (!isConnected) {
    try {
      await connectDB();
      isConnected = true;
    } catch (error) {
      console.error(`❌ DB Connection Error: ${error.message}`);
    }
  }
};

// POST: Save email
export async function POST(request) {
  await loadDB();

  try {
    const body = await request.json();
    const { email } = body;

    // Basic validation
    if (!email || !/.+\@.+\..+/.test(email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const exists = await EmailModel.findOne({ email });
    if (exists) {
      return NextResponse.json(
        { message: "Email already subscribed" },
        { status: 409 }
      );
    }

    // Save to DB
    await EmailModel.create({ email });

    return NextResponse.json(
      { success: true, message: "Email saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("❌ POST Email Error:", error.message);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// GET: Get all emails
export async function GET() {
  await loadDB();

  try {
    const emails = await EmailModel.find().sort({ date: -1 }); // latest first
    return NextResponse.json({ success: true, emails });
  } catch (error) {
    console.error("❌ GET Email Error:", error.message);
    return NextResponse.json({ error: "Failed to fetch emails" }, { status: 500 });
  }
}
