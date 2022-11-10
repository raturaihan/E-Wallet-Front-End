import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ModalFailed from '../components/ModalFailed'
import ModalSuccess from '../components/ModalSuccess'
import Navbar from '../components/Navbar'
import { ITransfer } from '../interface'
import { postTransfer } from '../redux/actions/transferActions'
import { TransferDispatch, UsersDispatch } from '../redux/actions/typesActions'
import { getProfileUser } from '../redux/actions/userActions'
import { RootState } from '../redux/reducers/indexReducers'
import {InputForm, BlueButton, AmountForm} from '../styles/Styled'

function Transfer() {
  const {user} = useSelector((state: RootState) => state.userReducer);
  const {transfer, transferError} = useSelector((state: RootState) => state.transferReducer);
  const [modal, setModal] = useState(false)

  const dispatchUser: UsersDispatch= useDispatch()
  const dispatchTransfer: TransferDispatch = useDispatch()

  useEffect(() => {
    dispatchUser(getProfileUser())
    setModal(transferError === "")
  }, [transferError,dispatchUser]);

  const [input, setInput] = useState({
    transferTo: transfer.to,
    description: transfer.description
  })

  const [inputAmount, setInputAmount] = useState(transfer.amount)

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [event.currentTarget.name]: event.currentTarget.value,
      });
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const transferData: ITransfer = {
            to: input.transferTo,
            amount: inputAmount, 
            description: input.description,
        };
        dispatchTransfer(postTransfer(transferData))
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
                        onChange={handleChange}
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
                        onChange={e => setInputAmount(e.target.valueAsNumber)}
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
                        onChange={handleChange}
                        required
                    />
                </div>
            <div className='row mt-4'>
                <BlueButton type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">Send</BlueButton>
                {modal? 
                  <ModalFailed 
                    transType='Transfer'
                    error={transferError}/> 
                    : <ModalSuccess 
                    typeTrans='Transfer'
                    amount={inputAmount}
                    from={user.wallet_number}
                    to={input.transferTo}
                    description={input.description}/>}
            </div>
            </form>
        </div>
    </div>
  )
}

export default Transfer