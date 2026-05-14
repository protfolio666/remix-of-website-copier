import { useEffect, useState } from "react";

/**
 * Global cinematic overlay: animated grain, vignette, accent bloom,
 * teal/orange color grade, subtle scanlines, and scroll-activated letterbox.
 * Mounted once at the root, fixed above content but pointer-events:none.
 */
export function CinematicFx() {
  const [letterbox, setLetterbox] = useState(false);

  useEffect(() => {
    const onScroll = () => setLetterbox(window.scrollY > window.innerHeight * 0.35);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="cinematic-fx" data-letterbox={letterbox ? "on" : "off"} aria-hidden>
      <div className="fx-grade" />
      <div className="fx-bloom" />
      <div className="fx-vignette" />
      <div className="fx-scan" />
      <div className="fx-grain" />
      <div className="fx-letterbox" />
    </div>
  );
}
