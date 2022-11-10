import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from '../redux/actions/transactionsAction';
import { TransactionsDispatch } from '../redux/actions/typesActions';
import { RootState } from '../redux/reducers/indexReducers';
import moment from 'moment'

function TableData() {
  const {transactions, transactionsLoading, transactionsError} = useSelector((state: RootState) => state.transactionsReducer);
  const dispatchTrans: TransactionsDispatch = useDispatch()
  console.log(transactions)
  useEffect(() => {
    dispatchTrans(getAllTransactions())
  }, [dispatchTrans]);

  function formatType(transType:string) {
    if(transType == "INCOME"){
        return "CREDIT"
    }else if(transType == "OUTCOME"){
        return "DEBIT"
    }
  }

  function formatAmount(transType:string, amount:number) {
    if(transType == "INCOME"){
        return <p className='text-success'>+{amount}</p>
    }else if(transType == "OUTCOME"){
        return <p className='text-danger'>-{amount}</p>
    }
  }

  return (
    <div>
    <Table responsive striped>
      <thead>
        <tr>
          <th>Date {"&"} Time</th>
          <th>Type</th>
          <th>From/To</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(val => (
            <tr>
                <td>{moment(val.date).format('h:mm - D MMMM YYYY')}</td>
                <td>{formatType(val.status)}</td>
                <td>{val.sender} / {val.recipient}</td>
                <td>{val.description}</td>
                <td>{formatAmount(val.status,val.amount)}</td>
            </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}

export default TableData