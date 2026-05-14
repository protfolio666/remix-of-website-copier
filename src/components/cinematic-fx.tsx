/**
 * Global cinematic overlay: animated grain, vignette, accent bloom,
 * teal/orange color grade, and subtle scanlines.
 * Mounted once at the root, fixed above content but pointer-events:none.
 */
export function CinematicFx() {
  return (
    <div className="cinematic-fx" aria-hidden>
      <div className="fx-grade" />
      <div className="fx-bloom" />
      <div className="fx-vignette" />
      <div className="fx-scan" />
      <div className="fx-grain" />
    </div>
  );
}
