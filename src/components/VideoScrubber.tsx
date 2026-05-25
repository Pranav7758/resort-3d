"use client";

import { useRef, useEffect, useState } from 'react';
import { MotionValue, useMotionValueEvent } from 'framer-motion';

interface VideoScrubberProps {
  src: string;
  progress: MotionValue<number>;
}

export default function VideoScrubber({ src, progress }: VideoScrubberProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // We need to fetch the video and wait for metadata so we know the exact duration
    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      // Optional: draw the first frame immediately
      video.currentTime = 0;
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    
    // If it's already loaded
    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  useMotionValueEvent(progress, "change", (latest) => {
    const video = videoRef.current;
    if (!video || duration === 0) return;
    
    // Scrubbing a video is done by setting currentTime.
    // It's massively faster than dealing with hundreds of discrete image files!
    video.currentTime = latest * duration;
  });

  return (
    <video
      ref={videoRef}
      src={src}
      className="w-full h-full object-cover"
      muted
      playsInline
      preload="auto"
      style={{ 
        display: 'block', 
        transform: 'translateZ(0)', 
        willChange: 'transform' 
      }}
    />
  );
}
