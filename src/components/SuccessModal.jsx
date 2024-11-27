import React from "react";

import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import ActionBtn from "./ActionBtn";
import check from "../assets/check.png";

const SuccessModal = ({ showModal }) => {
  return (
    <div>
      <Modal
        centered
        className="text-center rounded-2 "
        show={showModal}
        animation={true}
      >
        <Modal.Body>
          <img src={check} alt="" />
          <h2 className="my-2 fs-3">Awesome</h2>
          <p className="fs-5 fw-medium">Your event has been created</p>
          <div className="bg-dark p-5 rounded-2 ">
            <Link to="/" className="text-decoration-none">
              <ActionBtn content="Back to Home" width="276px" />
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SuccessModal;
