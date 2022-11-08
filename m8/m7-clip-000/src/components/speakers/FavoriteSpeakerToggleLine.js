export default function FavoriteSpeakerToggleLine({
  speakerRec,
  toggleFavoriteSpeaker,
  children,
}) {
  return (
    <button
      className={
        speakerRec.favorite ? "heartredbutton btn" : "heartdarkbutton btn"
      }
      onClick={toggleFavoriteSpeaker}
    >
      {children}
    </button>
  );
}
