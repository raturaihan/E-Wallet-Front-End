import React from 'react'

function HomeProfile() {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <h1 className='fw-bold'>Good Morning, Asep!</h1>
                <h5>Acount: 123456789</h5>
            </div>
            <div className='row'>
                <div className='d-flex justify-content-end gap-5'>
                    <h6 className='fw-bolder'>Balance:</h6>
                </div>
            </div>
            <div className='row'>
                <div className='d-flex justify-content-end gap-5'>
                    <h1 className='fw-bold'>IDR 12000000</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeProfile