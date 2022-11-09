import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar'
import { ITopup } from '../interface';
import { postTopup } from '../redux/actions/topupActions';
import { TopupDispatch } from '../redux/actions/typesActions';
import { RootState } from '../redux/reducers/indexReducers';
import {InputForm, BlueButton, AmountForm, SelectForm} from '../styles/Styled'

function Topup() {
  const {user} = useSelector((state: RootState) => state.userReducer);
  const dispatch: TopupDispatch = useDispatch()

  interface IFormTopupElements extends HTMLFormControlsCollection {
    source_of_fund_id: number;
    topupAmount: number;
  }

  interface IFormTopup extends HTMLFormElement {
    readonly elements: IFormTopupElements
  }

  const handleSubmit = (event: React.FormEvent<IFormTopup>) => {
    event.preventDefault()
    const topupData: ITopup = {
        amount: parseInt(event.currentTarget.topupAmount.value),
        source_of_fund_id: parseInt(event.currentTarget.source_of_fund_id.value)
    }; 
    dispatch(postTopup(topupData))
  }

  return (
    <div>
        <Navbar />
        <div className='d-flex flex-column align-items-center '>
            <div className='mt-5'>
                <h1 className='fw-bold fs-1'>Top Up</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='row mt-5'>
                    <label htmlFor="email" className='form-label fw-bold'>From</label><br />
                    <SelectForm className="form-select" id="source_of_fund_id">
                      <option selected>Choose...</option>
                      <option value={1}>Bank Transfer</option>
                      <option value={2}>Visa Card</option>
                      <option value={3}>Cash</option>
                    </SelectForm>
                </div>
                <div className='row mt-3'>
                    <label htmlFor="topupTo" className='form-label fw-bold'>To</label> <br />
                    <InputForm 
                        type="number" 
                        className='"form-control'
                        id="topupTo"
                        value={user.wallet_number}
                        disabled
                    />
                </div>
                <div className='row mt-3'>
                    <label htmlFor="topupAmount" className='form-label fw-bold'>Amount</label> <br />
                    <AmountForm 
                        type="number" 
                        className='"form-control'
                        id="topupAmount"
                        required
                    />
                </div>
            <div className='row mt-4'>
                <BlueButton type="submit">Top Up</BlueButton>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Topup