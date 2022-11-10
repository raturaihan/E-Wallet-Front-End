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
              <ModalSuccess
                typeTrans="Top Up"
                amount={inputAmount}
                from={user.wallet_number}
                to={user.wallet_number}
                description={descriptionModal(inputSelect)}
                show={modal}
              />
            ) : (
              <ModalFailed transType="Top Up" error={topupError} show={modal} />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Topup;
