import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeProfile from '../components/HomeProfile'
import Navbar from '../components/Navbar'
import { getAllTransactions } from '../redux/actions/transactionsAction'
import { TransactionsDispatch, UsersDispatch } from '../redux/actions/typesActions'
import { getProfileUser } from '../redux/actions/userActions'
import { RootState } from '../redux/reducers/indexReducers'

function Home() {
  const {user, userLoading, userError} = useSelector((state: RootState) => state.userReducer);
  const {transactions, transactionsLoading, transactionsError} = useSelector((state: RootState) => state.transactionsReducer);
  const dispatch: UsersDispatch= useDispatch()
  const dispatchTrans: TransactionsDispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfileUser())
  }, [dispatch]);

  useEffect(() => {
    dispatchTrans(getAllTransactions())
  }, [dispatchTrans]);

  return (
    <div>
        <Navbar />
        <div className='container'>
            <div className='row mt-5'>
                {userLoading && <h1>Loading...</h1>}
                {!userLoading && userError && <h1>Error</h1>}
                <HomeProfile 
                name={user.name}
                wallet_number={user.wallet_number}
                balance={user.balance}/>
            </div>
        </div>
    </div>
  )
}

export default Home