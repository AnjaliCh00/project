import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    title: "My Video",
    description: "This video teaches you the basics of Next.js.",
    videoUrl: "/video/WhatsApp Video 2025-11-19 at 10.49.02.mp4",
    points: [
      "Easy to understand content",
      "Perfect for beginners",
      "Covers all fundamentals",
      "Fast and responsive UI"
    ]
  });
}
 