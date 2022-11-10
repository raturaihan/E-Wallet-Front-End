import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalFailed from "../components/ModalFailed";
import ModalSuccess from "../components/ModalSuccess";
import Navbar from "../components/Navbar";
import { ITransfer } from "../interface";
import { postTransfer } from "../redux/actions/transferActions";
import { TransferDispatch, UsersDispatch } from "../redux/actions/typesActions";
import { getProfileUser } from "../redux/actions/userActions";
import { RootState } from "../redux/reducers/indexReducers";
import { InputForm, BlueButton, AmountForm } from "../styles/Styled";
import { ModalButton } from "../styles/Styled";
import { Link } from "react-router-dom";

function Transfer() {
  const formatBalance = (balance: number) => {
    return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const { user } = useSelector((state: RootState) => state.userReducer);
  const { transfer, transferError } = useSelector(
    (state: RootState) => state.transferReducer
  );
  const [modal, setModal] = useState(false);

  const dispatchUser: UsersDispatch = useDispatch();
  const dispatchTransfer: TransferDispatch = useDispatch();

  useEffect(() => {
    dispatchUser(getProfileUser());
  }, [dispatchUser]);

  const [input, setInput] = useState({
    transferTo: transfer.to,
    description: transfer.description,
  });

  const [inputAmount, setInputAmount] = useState(transfer.amount);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const transferData: ITransfer = {
      to: input.transferTo,
      amount: inputAmount,
      description: input.description,
    };
    dispatchTransfer(postTransfer(transferData));
    setModal(true);
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column align-items-center ">
        <div className="mt-5">
          <h1 className="fw-bold fs-1">Transfer</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row mt-5">
            <label htmlFor="transferFrom" className="form-label fw-bold">
              From
            </label>{" "}
            <br />
            <InputForm
              type="number"
              className='"form-control'
              id="transferFrom"
              disabled
              value={user.wallet_number}
            />
          </div>
          <div className="row mt-3">
            <label htmlFor="transferTo" className="form-label fw-bold">
              To
            </label>{" "}
            <br />
            <InputForm
              name="transferTo"
              type="number"
              className='"form-control'
              id="transferTo"
              onChange={handleChange}
              required
            />
          </div>
          <div className="row mt-3">
            <label htmlFor="transferAmount" className="form-label fw-bold">
              Amount
            </label>{" "}
            <br />
            <AmountForm
              name="transferAmount"
              type="number"
              className='"form-control'
              id="transferAmount"
              onChange={(e) => setInputAmount(e.target.valueAsNumber)}
              required
            />
          </div>
          <div className="row mt-3">
            <label htmlFor="description" className="form-label fw-bold">
              Description
            </label>{" "}
            <br />
            <InputForm
              type="text"
              name="description"
              className="form-control"
              id="description"
              onChange={handleChange}
              required
            />
          </div>
          <div className="row mt-4">
            <BlueButton type="submit" data-bs-target="#exampleModal">
              Send
            </BlueButton>
            {transferError === "" ? (
              <div
                className={`modal ${modal ? "d-flex" : "d-none"}`}
                tabIndex={-1}
              >
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
                              Transfer Success
                            </h1>
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="d-flex justify-content-between align-items-center">
                            <p>Amount</p>
                            <p className="fw-bold fs-3">{formatBalance(inputAmount)}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="d-flex justify-content-between">
                            <p>From</p>
                            <p>{user.wallet_number}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="d-flex justify-content-between">
                            <p>To</p>
                            <p>{input.transferTo}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="d-flex justify-content-between">
                            <p>Description</p>
                            <p>{input.description}</p>
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
            ) : (
              <div
                className={`modal ${modal ? "d-flex" : "d-none"}`}
                tabIndex={-1}
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-body">
                      <div className="container">
                        <div className="row mt-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="55"
                            height="55"
                            fill="currentColor"
                            className="bi bi-x-circle-fill text-danger"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                          </svg>
                        </div>
                        <div className="row mt-3">
                          <div className="d-flex justify-content-center">
                            <h1 className="fw-bold text-danger">
                              Transfer Failed
                            </h1>
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="d-flex justify-content-center">
                            <p className="fw-bold fs-3">{transferError}</p>
                          </div>
                        </div>
                        <div className="row my-3">
                          <div className="d-flex justify-content-center gap-4">
                          <Link to={"/"} className="text-decoration-none">
                            <ModalButton
                              type="button"
                              className="btn"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </ModalButton>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Transfer;
