import React from 'react'
import { IUser } from '../interface'

function HomeProfile({name, wallet_number, balance}: IUser) {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <h1 className='fw-bold'>Good Morning, {name}!</h1>
                <h5>Acount: {wallet_number}</h5>
            </div>
            <div className='row'>
                <div className='d-flex justify-content-end gap-5'>
                    <h6 className='fw-bolder'>Balance:</h6>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex justify-content-end gap-5'>
                    <h1 className='fw-bold'>IDR {balance}</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeProfile