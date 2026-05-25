"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrolling({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis root options={{ lerp: 0.35, duration: 0.8, smoothWheel: false }}>
      {children}
    </ReactLenis>
  );
}
