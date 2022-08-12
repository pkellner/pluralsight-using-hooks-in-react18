import SpeakersModalHeader from "./SpeakersModalHeader";
import SpeakersModalBody from "./SpeakersModalBody";
import SpeakersModalFooter from "./SpeakersModalFooter";
import { SpeakersModalContext } from "../App";
import { useContext } from "react";
import SpeakersModalTags from "./SpeakersModalTags";

export default function SpeakersModal() {
  const { modalShow } = useContext(SpeakersModalContext);
  const cssShowHide =
    modalShow && modalShow === true ? "modal show-modal" : "modal hide-modal";

  return (
    <>
      <style jsx>
        {`
          .show-modal {
            display: block;
          }
          .hide-modal {
            display: none;
          }
        `}
      </style>
      <div role="dialog" className={cssShowHide}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <SpeakersModalHeader />
            <SpeakersModalBody />
            <SpeakersModalFooter />
          </div>
        </div>
      </div>
    </>
  );
}
