import React from "react";
import Modal from "react-bootstrap/Modal";
import ActionBtn from "../ActionBtn";
import { Link } from "react-router-dom";
import { CiWarning } from "react-icons/ci";
const Caution = ({ showModal, setShowModal }) => {
  return (
    <Modal centered show={showModal} onHide={() => setShowModal(false)}>
      <div
        className="p-4 bg-black text-white rounded-2 d-flex justify-content-center align-items-center"
        style={{ height: "250px" }}
      >
        <div className="text-center">
          <div className="d-flex align-items-center gap-2 justify-content-center my-2">
            <CiWarning className="fs-4 text-danger" />
            <span className="fs-4 text-danger">Login</span>
          </div>

          <p className="text-center">You have to login to pay for a ticket</p>
          <Link to="/login">
            <ActionBtn content="Proceed to Login" width="100%" />
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default Caution;
