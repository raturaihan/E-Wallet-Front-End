import React from 'react'
import {ModalButton} from '../styles/Styled'
import {Link} from 'react-router-dom'
import {InputForm, BlueButton, AmountForm, SelectForm} from '../styles/Styled'

interface modalFailedDetails{
    transType: string, 
    error: string | null
}

function ModalFailed({transType, error}: modalFailedDetails) {
  return (
    <div>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-body">
                    <div className='container'>
                        <div className='row mt-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" className="bi bi-x-circle-fill text-danger" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                        </svg>
                        </div>
                        <div className='row mt-3'>
                        <div className='d-flex justify-content-center'>
                            <h1 className='fw-bold text-danger'>{transType} Failed</h1>
                        </div>
                        </div>
                        <div className='row mt-5'>
                            <div className='d-flex justify-content-center'>
                                <p className='fw-bold fs-3'>{error}</p>
                            </div>
                        </div>
                        <div className='row my-3'>
                            <div className='d-flex justify-content-center gap-4'>
                                <ModalButton type="button" className="btn" data-bs-dismiss="modal">Close</ModalButton>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalFailed