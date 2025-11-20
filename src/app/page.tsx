// import VideoSection from "@/components/videosection";

// export default function Home() {
//   return (
//     <main>
//       <VideoSection />
//     </main>
//   );
// }
"use client";

import VideoJS from "@/components/videojs";

const HLS_SRC =
  "https://ik.imagekit.io/4rp0md9y0/video.mp4/ik-master.m3u8?tr=sr-240_360_480_720";

export default function HlsVideoJsStreaming() {
  const videoJsOptions = {
    controls: true,
    autoplay: false,
    muted: false,
    preload: "auto",
    responsive: true,
    fluid: true,

    sources: [
      {
        src: HLS_SRC,
        type: "application/x-mpegURL",
      },
    ],
  };

  return (
    <main className="max-w-[900px] mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">
        HLS Streaming with Video.js + ImageKit
      </h1>

      <VideoJS options={videoJsOptions} />
    </main>
  );
}
