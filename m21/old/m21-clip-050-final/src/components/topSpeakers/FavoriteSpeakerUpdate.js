import { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { updateSpeakerFavoriteAction } from "./actions/updateSpeakerFavoriteAction";

function SubmitButton({ speakerRec }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={
        speakerRec.favorite ? "heartredbutton btn" : "heartdarkbutton btn"
      }
      disabled={pending}
    >
      {pending ? (
        <i className="spinner-border text-dark" role="status" />
      ) : null}
    </button>
  );
}

export default function FavoriteSpeakerUpdate({ speakerRec }) {
  const [state, formAction] = useActionState(updateSpeakerFavoriteAction, {
    success: false,
    error: null,
    speaker: speakerRec,
  });



  return (
    <form action={formAction}>
      <input
        type="hidden"
        name="speakerData"
        value={JSON.stringify(state.speaker)}
      />
      <SubmitButton speakerRec={state.speaker} />
      {state.error && (
        <div
          className="error-message"
          style={{ color: "red", fontSize: "12px" }}
        >
          {state.error}
        </div>
      )}
    </form>
  );
}
