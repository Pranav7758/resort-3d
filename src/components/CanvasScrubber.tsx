"use client";

import { useRef, useEffect, useCallback } from 'react';
import { MotionValue, useMotionValueEvent } from 'framer-motion';

interface CanvasScrubberProps {
  images: HTMLImageElement[];
  progress: MotionValue<number>;
}

export default function CanvasScrubber({ images, progress }: CanvasScrubberProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const currentProgressRef = useRef(0);
  const sizeRef = useRef({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        sizeRef.current = {
          width: entries[0].contentRect.width,
          height: entries[0].contentRect.height
        };
        // Trigger a redraw when resize happens
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(drawFrame);
      }
    });

    observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  const drawFrame = useCallback(() => {
    if (!images || images.length === 0) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false, desynchronized: true });
    if (!ctx) return;

    const dpr = 1; 
    const rect = sizeRef.current;
    if (rect.width === 0 || rect.height === 0) return;

    if (canvas.width !== Math.round(rect.width * dpr) || canvas.height !== Math.round(rect.height * dpr)) {
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.scale(dpr, dpr);
    }

    const frameIndex = Math.max(0, Math.min(
      images.length - 1,
      Math.floor(currentProgressRef.current * (images.length - 1))
    ));

    const img = images[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = rect.width / rect.height;

    let drawWidth: number, drawHeight: number, drawX: number, drawY: number;

    if (imgAspect > canvasAspect) {
      drawHeight = rect.height;
      drawWidth = img.naturalWidth * (rect.height / img.naturalHeight);
      drawX = (rect.width - drawWidth) / 2;
      drawY = 0;
    } else {
      drawWidth = rect.width;
      drawHeight = img.naturalHeight * (rect.width / img.naturalWidth);
      drawX = 0;
      drawY = (rect.height - drawHeight) / 2;
    }

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, [images]);

  useMotionValueEvent(progress, "change", (latest) => {
    currentProgressRef.current = latest;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(drawFrame);
  });

  // Initial draw once images are available
  useEffect(() => {
    if (images && images.length > 0) {
      drawFrame();
    }
  }, [images, drawFrame]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block', transform: 'translateZ(0)', willChange: 'transform' }}
    />
  );
}

