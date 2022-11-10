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

function Transfer() {
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
    if (!inputValidation(transferData)){
      dispatchTransfer(postTransfer(transferData));
      setModal(true);
    }
  };

  const [inputErrors, setInputErrors] = useState({
    to: false,
    amount: false,
    description: false,
  })

  const inputValidation = (payload: ITransfer) => {
    let errorState = {
      to: false,
      amount: false,
      description: false,
    }
    let errorTotal = false; 

    if (payload.to === "") {
      errorState = {...errorState, to:true}
      errorTotal=true;
    }
    if (!payload.amount || payload.amount > 50000000 || payload.amount < 1000) {
      errorState = {...errorState, amount:true}
      errorTotal=true;
    }
    if (payload.description === "") {
      errorState = {...errorState, description:true}
      errorTotal=true;
    }

    setInputErrors(errorState);
    return errorTotal;
  }


  return (
    <div>
      <Navbar />
      <div className="d-flex flex-column align-items-center ">
        <div className="mt-5">
          <h1 className="fw-bold fs-1">Transfer</h1>
        </div>
        <form onSubmit={handleSubmit} noValidate>
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
          {inputErrors.to ? (<p className="text-danger">This Field is Required</p>):(<></>)}
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
          {inputErrors.amount ? (<span className="text-danger">Min Amount IDR1.000, Max Amount IDR50.000.000</span>):(<></>)}
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
          {inputErrors.description ? (<span className="text-danger">This field is required</span>):(<></>)}
          <div className="row mt-4">
            <BlueButton type="submit" data-bs-target="#exampleModal">
              Send
            </BlueButton>
            {transferError === "" ? (
              <ModalSuccess
                typeTrans="Transfer"
                amount={inputAmount}
                from={user.wallet_number}
                to={input.transferTo}
                description={input.description}
                show={modal}
              />
            ) : (
              <ModalFailed
                transType="Transfer"
                error={transferError}
                show={modal}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Transfer;
