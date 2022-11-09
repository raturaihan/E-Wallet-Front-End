import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { ITransfer } from '../interface'
import { postTransfer } from '../redux/actions/transferActions'
import { TransferDispatch } from '../redux/actions/typesActions'
import { RootState } from '../redux/reducers/indexReducers'
import {InputForm, BlueButton, AmountForm, SelectForm} from '../styles/Styled'

function Transfer() {
  const {user} = useSelector((state: RootState) => state.userReducer);
  const dispatch: TransferDispatch = useDispatch()

  interface IFormTransferElements extends HTMLFormControlsCollection {
    transferTo: string;
    transferAmount: number;
    description: string;
  }

  interface IFormTransfer extends HTMLFormElement {
    readonly elements: IFormTransferElements
  }

  const handleSubmit = (event: React.FormEvent<IFormTransfer>) => {
    console.log(event.currentTarget.transferTo.value)
        event.preventDefault()
        const transferData: ITransfer = {
            to: event.currentTarget.transferTo.value.toString(),
            amount: parseInt(event.currentTarget.transferAmount.value), 
            description: event.currentTarget.description.value,
        };
        dispatch(postTransfer(transferData))
    }
  return (
    <div>
      <Navbar />
      <div className='d-flex flex-column align-items-center '>
            <div className='mt-5'>
                <h1 className='fw-bold fs-1'>Transfer</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='row mt-5'>
                    <label htmlFor="transferFrom" className='form-label fw-bold'>From</label> <br />
                    <InputForm 
                        type="number" 
                        className='"form-control'
                        id="transferFrom"
                        disabled
                        value={user.wallet_number}
                    />
                </div>
                <div className='row mt-3'>
                    <label htmlFor="transferTo" className='form-label fw-bold'>To</label> <br />
                    <InputForm
                        name='transferTo' 
                        type="number" 
                        className='"form-control'
                        id="transferTo"
                        required
                    />
                </div>
                <div className='row mt-3'>
                    <label htmlFor="transferAmount" className='form-label fw-bold'>Amount</label> <br />
                    <AmountForm
                        name='transferAmount' 
                        type="number" 
                        className='"form-control'
                        id="transferAmount"
                        required
                    />
                </div>
                <div className='row mt-3'>
                    <label htmlFor="description" className='form-label fw-bold'>Description</label> <br />
                    <InputForm 
                        type="text" 
                        name='description'
                        className='form-control'
                        id="description"
                        required
                    />
                </div>
            <div className='row mt-4'>
                <BlueButton type="submit">Send</BlueButton>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Transfer