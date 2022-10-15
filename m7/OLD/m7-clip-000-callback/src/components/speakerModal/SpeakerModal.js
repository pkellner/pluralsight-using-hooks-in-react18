import { useContext } from "react";
import SpeakersModalHeader from "./SpeakerModalHeader";
import SpeakersModalBody from "./SpeakerModalBody";
import SpeakersModalFooter from "./SpeakerModalFooter";
import { SpeakerModalContext } from "../contexts/SpeakerModalContext";

export default function SpeakerModal() {
  const { modalShow } = useContext(SpeakerModalContext);

  const cssShowHide =
    modalShow && modalShow === true
      ? "modal show-modal has-backdrop"
      : "modal hide-modal";

  return (
    <>
      <style jsx>
        {`
          .show-modal {
            display: block;
          }

          .has-backdrop:before {
            content: "";
            background: rgb(24 26 29 / 77%);
            position: absolute;
            height: 100%;
            width: 100%;
            left: 0;
            top: 0;
            margin: 0;
            backdrop-filter: blur(5px);
          }

          .hide-modal {
            display: none;
          }
        `}
      </style>
      <div role="dialog" className={cssShowHide}>
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content border-0"
            style={{
              backgroundColor: "#EEEEEE",
            }}
          >
            <SpeakersModalHeader />
            <SpeakersModalBody />
            <SpeakersModalFooter />
          </div>
        </div>
      </div>
    </>
  );
}
