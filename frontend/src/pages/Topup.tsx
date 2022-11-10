import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalFailed from "../components/ModalFailed";
import ModalSuccess from "../components/ModalSuccess";
import Navbar from "../components/Navbar";
import { ITopup } from "../interface";
import { postTopup } from "../redux/actions/topupActions";
import { TopupDispatch, UsersDispatch } from "../redux/actions/typesActions";
import { getProfileUser } from "../redux/actions/userActions";
import { RootState } from "../redux/reducers/indexReducers";
import {
  InputForm,
  BlueButton,
  AmountForm,
  SelectForm,
} from "../styles/Styled";
import { ModalButton } from "../styles/Styled";
import { Link } from "react-router-dom";

function Topup() {
  const { user } = useSelector((state: RootState) => state.userReducer);
  const { topup, topupError, topupLoading } = useSelector(
    (state: RootState) => state.topupReducer
  );
  const [modal, setModal] = useState(false);

  const dispatchUser: UsersDispatch = useDispatch();
  const dispatchTopup: TopupDispatch = useDispatch();

  useEffect(() => {
    dispatchUser(getProfileUser());
  }, [dispatchUser]);

  const [inputAmount, setInputAmount] = useState(topup.amount);
  const [inputSelect, setInputSelect] = useState(topup.source_of_fund_id);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const topupData: ITopup = {
      amount: inputAmount,
      source_of_fund_id: inputSelect,
    };
    dispatchTopup(postTopup(topupData));
    setModal(true);
  };

  function descriptionModal(input: number) {
    if (inputSelect === 1) {
      return "Top Up From Bank Transfer";
    } else if (inputSelect === 2) {
      return "Top Up From Visa Card";
    } else if (inputSelect === 3) {
      return "Top Up From Cash";
    }
  }

  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column align-items-center ">
        <div className="mt-5">
          <h1 className="fw-bold fs-1">Top Up</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row mt-5">
            <label htmlFor="email" className="form-label fw-bold">
              From
            </label>
            <br />
            <SelectForm
              className="form-select"
              id="source_of_fund_id"
              onChange={(e) => setInputSelect(parseInt(e.target.value))}
              value={inputSelect}
            >
              <option value="" selected>
                Choose...
              </option>
              <option value={1}>Bank Transfer</option>
              <option value={2}>Visa Card</option>
              <option value={3}>Cash</option>
            </SelectForm>
          </div>
          <div className="row mt-3">
            <label htmlFor="topupTo" className="form-label fw-bold">
              To
            </label>{" "}
            <br />
            <InputForm
              type="number"
              className='"form-control'
              id="topupTo"
              value={user.wallet_number}
              disabled
            />
          </div>
          <div className="row mt-3">
            <label htmlFor="topupAmount" className="form-label fw-bold">
              Amount
            </label>{" "}
            <br />
            <AmountForm
              type="number"
              className='"form-control'
              id="topupAmount"
              onChange={(e) => setInputAmount(e.target.valueAsNumber)}
              required
            />
          </div>
          <div className="row mt-4">
            <BlueButton
              type="submit"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Top Up
            </BlueButton>
            {topupError === "" ? (
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
                              Top Up Success
                            </h1>
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="d-flex justify-content-between align-items-center">
                            <p>Amount</p>
                            <p className="fw-bold fs-3">{inputAmount}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="d-flex justify-content-between">
                            <p>From</p>
                            <p>{"100" + inputSelect}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="d-flex justify-content-between">
                            <p>To</p>
                            <p>{user.wallet_number}</p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="d-flex justify-content-between">
                            <p>Description</p>
                            <p>{descriptionModal(inputSelect)}</p>
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
                              Top Up Failed
                            </h1>
                          </div>
                        </div>
                        <div className="row mt-5">
                          <div className="d-flex justify-content-center">
                            <p className="fw-bold fs-3">{topupError}</p>
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

export default Topup;
