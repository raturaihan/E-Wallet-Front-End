import React from "react";
import { ModalButton } from "../styles/Styled";
import { Link } from "react-router-dom";

interface modalSuccessDetails {
  typeTrans: string;
  amount: number;
  from: string;
  to: string;
  description?: string;
  show?: boolean;
}

function ModalSuccess({
  typeTrans,
  amount,
  from,
  to,
  description,
  show,
}: modalSuccessDetails) {
  const formatBalance = (balance: number) => {
    return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };
  return (
    <div>
      <div className={`modal ${show ? "d-flex" : "d-none"}`} tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container">
                <div className="row mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="55"
                    height="55"
                    fill="currentcolor"
                    className="bi bi-check-circle-fill text-success"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                </div>
                <div className="row mt-3">
                  <div className="d-flex justify-content-center">
                    <h1 className="fw-bold text-success">
                      {typeTrans} Success
                    </h1>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="d-flex justify-content-between align-items-center">
                    <p>Amount</p>
                    <p className="fw-bold fs-3">{formatBalance(amount)}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-between">
                    <p>From</p>
                    <p>{from}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-between">
                    <p>To</p>
                    <p>{to}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-between">
                    <p>Description</p>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="row my-3">
                  <Link to={"/"} className="text-decoration-none">
                    <div className="d-flex justify-content-center gap-4">
                      <ModalButton
                        type="button"
                        className="btn"
                        data-bs-dismiss="modal"
                      >
                        Print
                      </ModalButton>
                      <ModalButton
                        type="button"
                        className="btn"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </ModalButton>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalSuccess;
