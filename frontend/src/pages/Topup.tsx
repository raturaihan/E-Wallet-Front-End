import React from 'react'
import Navbar from '../components/Navbar'
import {InputForm, BlueButton, AmountForm, SelectForm} from '../styles/Styled'

function Topup() {
  return (
    <div>
        <Navbar />
        <div className='d-flex flex-column align-items-center '>
            <div className='mt-5'>
                <h1 className='fw-bold fs-1'>Top Up</h1>
            </div>
            <form>
                <div className='row mt-5'>
                    <label htmlFor="email" className='form-label fw-bold'>From</label><br />
                    <SelectForm className="form-select" id="selectSource">
                      <option selected>Choose...</option>
                      <option value="1">Bank Transfer</option>
                      <option value="2">Visa Card</option>
                      <option value="3">Cash</option>
                    </SelectForm>
                </div>
                <div className='row mt-3'>
                    <label htmlFor="topupTo" className='form-label fw-bold'>To</label> <br />
                    <InputForm 
                        type="number" 
                        className='"form-control'
                        id="topupTo"
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