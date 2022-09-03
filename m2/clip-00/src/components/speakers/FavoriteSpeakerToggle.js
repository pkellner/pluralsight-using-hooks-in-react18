export default function FavoriteSpeakerToggle({ speakerRec }) {

  const updating = false;
  
  return (
    <button
      className={
        true ? "heartredbutton btn" : "heartdarkbutton btn"
      }
      onClick={(e) => {
        e.preventDefault();
        //
      }}
    >
      {updating ? (
        <i className="spinner-border text-dark" role="status" />
      ) : null}
    </button>
  );
}
