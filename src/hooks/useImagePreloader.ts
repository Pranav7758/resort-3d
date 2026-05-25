import { useState, useEffect, useRef } from 'react';

export function useImagePreloader(frameCount: number, pathPrefix: string, pathSuffix: string = '.webp') {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    const handleImageLoad = () => {
      loadedCount++;
      setProgress((loadedCount / frameCount) * 100);
      if (loadedCount >= frameCount) {
        setIsLoaded(true);
      }
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `${pathPrefix}${paddedIndex}${pathSuffix}`;
      
      // Decode image off the main thread to prevent jank when it's first drawn
      img.decode().then(() => {
        handleImageLoad();
      }).catch(() => {
        handleImageLoad(); // Fallback
      });
      
      images.push(img);
    }

    imagesRef.current = images;
  }, [frameCount, pathPrefix, pathSuffix]);

  return { progress, isLoaded, images: imagesRef.current };
}
