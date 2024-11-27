import React from "react";
import { useState } from "react";
import ActionBtn from "../ActionBtn";
import ConfirmPaymentModal from "./ConfirmPaymentModal";
import Caution from "./Caution";
import { toast } from "react-toastify";

const PaymentCard = () => {
  const [showModal, setShowModal] = useState(false);
  const token = false;

  return (
    <div
      className="bg-dark rounded-2 p-3"
      style={{ width: "300px", height: "269px" }}
    >
      {showModal && token ? (
        <ConfirmPaymentModal
          showModal={showModal}
          setShowModal={setShowModal}
          vipPrice={10000}
          regularPrice={5000}
        />
      ) : (
        <Caution showModal={showModal} setShowModal={setShowModal} />
      )}
      <h3 className="text-center mb-1">Pricing</h3>
      <div className="ticket-type mt-4">
        <span>VIP</span>

        <span className="fw-bolder">NGN 10,000</span>
      </div>

      <div className="ticket-type">
        <span>Regular</span>

        <span className="fw-bolder">NGN 5,000</span>
      </div>

      <ActionBtn
        content="Proceed To Payment"
        width={"100%"}
        className="herobtn mt-4"
        handleClick={() => setShowModal(true)}
      />
    </div>
  );
};

export default PaymentCard;
