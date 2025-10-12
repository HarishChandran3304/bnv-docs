"use client";

import * as React from "react";

type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
  poster?: string;
};

/**
 * Video component that behaves like a GIF:
 * - autoplay, loop, muted, playsInline by default
 * - accepts src values like "@videos/foo.mov" and rewrites to "/videos/foo.mov"
 */
export function Video({ src, className, muted = true, autoPlay = true, loop = true, playsInline = true, controls, poster, ...rest }: VideoProps) {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const resolvedSrc = React.useMemo(() => {
    if (src.startsWith("@videos/")) return "/videos/" + src.replace(/^@videos\//, "");
    if (src.startsWith("public/videos/")) return "/" + src.replace(/^public\//, "");
    if (src.startsWith("./public/videos/")) return "/" + src.replace(/^\.\/?public\//, "");
    return src;
  }, [src]);

  // Default: speed up to 1.5x
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const applyRate = () => {
      try {
        v.playbackRate = 1.5;
      } catch {}
    };
    applyRate();
    v.addEventListener("loadedmetadata", applyRate);
    return () => v.removeEventListener("loadedmetadata", applyRate);
  }, []);

  // Default: trim the last 0.5s by looping early
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const trimEndSeconds = 2;
    const onTimeUpdate = () => {
      const dur = v.duration;
      if (!Number.isFinite(dur) || dur <= 0) return;
      const end = Math.max(0, dur - trimEndSeconds);
      if (v.currentTime >= end - 0.01) {
        v.currentTime = 0;
        if (v.paused) {
          void v.play().catch(() => {});
        }
      }
    };
    v.addEventListener("timeupdate", onTimeUpdate);
    return () => v.removeEventListener("timeupdate", onTimeUpdate);
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      src={resolvedSrc}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      controls={controls}
      poster={poster}
      preload="metadata"
      {...rest}
    />
  );
}


