import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    title: "My Video",
    description: "This video teaches you the basics of Next.js.",
    videoUrl: "https://ik.imagekit.io/4rp0md9y0/WhatsApp%20Video%202025-11-19%20at%2010.49.02.mp4/ik-master.m3u8?tr=sr-360_480_720_1080",
    points: [
      "Easy to understand content",
      "Perfect for beginners",
      "Covers all fundamentals",
      "Fast and responsive UI"
    ]
  });
}
 




