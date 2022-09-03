export default function FavoriteSpeakerToggle({ speakerRec }) {
  const { updateSpeaker } = { updateSpeaker: () => {} };
  const [updating, setUpdating] = [false, () => {}];

  return (
    <button
      className={
        speakerRec.favorite ? "heartredbutton btn" : "heartdarkbutton btn"
      }
      onClick={(e) => {
        e.preventDefault();
        const newSpeakerRec = {
          ...speakerRec,
          favorite: !speakerRec.favorite,
        };
        setUpdating(true);
        updateSpeaker(newSpeakerRec, () => {
          setUpdating(false);
        });
      }}
    >
      {updating ? (
        <i className="spinner-border text-dark" role="status" />
      ) : null}
    </button>
  );
}
