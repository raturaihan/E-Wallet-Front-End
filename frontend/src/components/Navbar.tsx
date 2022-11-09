import React from 'react'
import { Link } from "react-router-dom";

type Props = {
  className?: string
}

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand ms-2" href="#"><h3 className='fw-bolder'>DigiWallet</h3></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse p-2 justify-content-end" id="navbarNav">
            <ul className="navbar-nav gap-3">
                <li className="nav-item">
                <Link className='text-decoration-none text-secondary' to={'/home'}>Home</Link>
                </li>
                <li className="nav-item">
                <Link className='text-decoration-none text-secondary' to={'/transfer'}>Transfer</Link>
                </li>
                <li className="nav-item">
                <Link className='text-decoration-none text-secondary' to={'/topup'}>Topup</Link>
                </li>
                <li className="nav-item">
                <Link className='text-decoration-none text-secondary' to={'/games'}>Games</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar