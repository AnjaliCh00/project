"use client";

import { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

import "@silvermine/videojs-quality-selector";
import "@silvermine/videojs-quality-selector/dist/css/quality-selector.css";
import "videojs-contrib-quality-levels";

export default function VideoJS({ options }: any) {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!playerRef.current && videoRef.current) {
      const videoElement = document.createElement("video");
      videoElement.className = "video-js vjs-default-skin vjs-big-play-centered";
      videoRef.current.appendChild(videoElement);

      const player = videojs(videoElement, options, () => {
        player.controlBar.addChild("QualitySelector"); // enable quality selector
      });

      playerRef.current = player;
    }
  }, [options]);

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, []);

  return (
    <div
      ref={videoRef}
      style={{ width: "100%", background: "#000", minHeight: 200 }}
    />
  );
}
