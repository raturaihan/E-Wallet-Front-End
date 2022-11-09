import React from 'react'
import Navbar from '../components/Navbar'
import {InputForm, BlueButton, AmountForm, SelectForm} from '../styles/Styled'

function Transfer() {
  return (
    <div>
      <Navbar />
      <div className='d-flex flex-column align-items-center '>
            <div className='mt-5'>
                <h1 className='fw-bold fs-1'>Transfer</h1>
            </div>
            <form>
                <div className='row mt-5'>
                    <label htmlFor="transferFrom" className='form-label fw-bold'>From</label> <br />
                    <InputForm 
                        type="number" 
                        className='"form-control'
                        id="transferFrom"
                        required
                    />
                </div>
                <div className='row mt-3'>
                    <label htmlFor="trasnferTo" className='form-label fw-bold'>To</label> <br />
                    <InputForm 
                        type="number" 
                        className='"form-control'
                        id="transferTo"
                        required
                    />
                </div>
                <div className='row mt-3'>
                    <label htmlFor="transferAmount" className='form-label fw-bold'>Amount</label> <br />
                    <AmountForm 
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
                        className='"form-control'
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