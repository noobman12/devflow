import { NextResponse } from "next/server";

import User from "@/database/user.model";
import { handleError } from "@/lib/handlers/error";
import dbConnect from "@/lib/mongoose";

export const runtime = 'nodejs'; // Explicitly use Node.js runtime

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find();
    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
