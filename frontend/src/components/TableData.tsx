import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from '../redux/actions/transactionsAction';
import { TransactionsDispatch } from '../redux/actions/typesActions';
import { RootState } from '../redux/reducers/indexReducers';
import moment from 'moment'
import {SelectForm, SearchBar, SelectShowType} from '../styles/Styled'
import { ITransaction } from '../interface';

function TableData() {
  const formatBalance = (balance: number) => {
    return balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const {transactions, transactionsLoading, transactionsError} = useSelector((state: RootState) => state.transactionsReducer);
 
  const [displayData, setDisplayData] = useState(transactions)
  const [searchValue, setSearchValue] = useState("");
  const [selectShowType, setSelectShowType] = useState("last-10-transaction");
  const [selectSortType, setSelectSortType] = useState("descending");
  const [selectSortBy, setSelectSortBy] = useState("date");
  console.log(displayData)

  const dispatchTrans: TransactionsDispatch = useDispatch()
  console.log(transactions)

  function FilterShow(data: ITransaction[]) {
    let filteredData=[];
    switch(selectShowType){
        case "last-10-transactions":
            filteredData = data.slice(0,10);
            return filteredData;
        case "this-month":
            filteredData = data.filter((val) => moment(val.date).month() === moment().month());
            return filteredData;
        case "last-month":
            filteredData = data.filter((val) => moment(val.date).month() === moment().subtract(1,"month").month());
            return filteredData;
        case "this-year":
            filteredData = data.filter((val) => moment(val.date).year() === moment().year());
            return filteredData;
        case "last-year": 
            filteredData = data.filter((val) => moment(val.date).year() === moment().subtract(1,"year").year());
            return filteredData;
        default:
            filteredData = data.slice(0,10);
            return filteredData;
    }
        
  }

  function FilterSortDate(data: ITransaction[]) {
    let sortedData=[];
    switch(selectSortType){
        case "ascending":
            sortedData = data.sort((a, b) => moment(a.date).isAfter(moment(b.date))?1:-1);
            return sortedData;
        case "descending":
            sortedData = data.sort((a, b) => moment(a.date).isAfter(moment(b.date))?-1:1);
            return sortedData;
        default:
            sortedData = data.sort((a, b) => moment(a.date).isAfter(moment(b.date))?-1:1);
            return sortedData;
    }
  }

  function FilterSortAmount(data: ITransaction[]) {
    let sortedData=[];
    switch(selectSortType){
        case "ascending":
            sortedData = data.sort((a, b) =>{
                let amount1: number = (a.status === "INCOME"? 1 : (-1))*a.amount;
                let amount2: number = (b.status === "INCOME"? 1 : (-1))*b.amount;
                return amount1 - amount2
            });
            return sortedData;
        case "descending":
            sortedData = data.sort((a, b) =>{
                let amount1: number = (a.status === "INCOME"? 1 : (-1))*a.amount;
                let amount2: number = (b.status === "INCOME"? 1 : (-1))*b.amount;
                return amount2 - amount1
            });
            return sortedData;
        default:
            sortedData = data.sort((a, b) =>{
                let amount1: number = (a.status === "INCOME"? 1 : (-1))*a.amount;
                let amount2: number = (b.status === "INCOME"? 1 : (-1))*b.amount;
                return amount1 - amount2
            });
        return sortedData
    }
  }

  function FilterData() {
    let filteredData = FilterShow(transactions);
    let sortedData; 
    switch(selectSortBy){
        case "date":
            sortedData = FilterSortDate(filteredData);
            break; 
        case "amount":
            sortedData = FilterSortAmount(filteredData);
            break; 
        default:
            sortedData = FilterSortDate(filteredData);
            break; 
    }
    setDisplayData(sortedData);
  }

  function formatType(transType:string) {
    if(transType == "INCOME"){
        return "CREDIT"
    }else if(transType == "OUTCOME"){
        return "DEBIT"
    }
  }

  function formatAmount(transType:string, amount:number) {
    if(transType == "INCOME"){
        return <p className='text-success'>+{formatBalance(amount)}</p>
    }else if(transType == "OUTCOME"){
        return <p className='text-danger'>-{formatBalance(amount)}</p>
    }
  }

  useEffect(() => {
    dispatchTrans(getAllTransactions())
    FilterData()
  }, [dispatchTrans]);

  useEffect(() => {
    setDisplayData(transactions);
    FilterData()
  }, [transactionsLoading])

  useEffect(() => {
    FilterData()
  }, [selectShowType, selectSortBy, selectSortType]);

  return (
    <div className='container'>
        <div className='row mt-4'>
            <div className='col'>
                <div className='d-flex justify-content-start gap-2 align-items-center'>
                <label htmlFor="Show">Show</label>
                <SelectShowType className="form-select" id="show_type" onChange={(e)=> {setSelectShowType(e.target.value)}} value={selectShowType}>
                        <option value='last-10-transactions'>Last 10 transactions</option>
                        <option value='this-month'>This month</option>
                        <option value='last-month'>Last month</option>
                        <option value='this-year'>This year</option>
                        <option value='last-year'>Last year</option>
                </SelectShowType>
                </div>
            </div>
            <div className='col'>
                <div className='d-flex justify-content-between gap-2'>
                <label htmlFor="Show">Sort by</label>
                <SelectForm className="form-select" id="sort_by" onChange={(e) => {setSelectSortBy(e.target.value)}} value={selectSortBy}>
                        <option value='date' selected>Date</option>
                        <option value='amount'>Amount</option>
                </SelectForm>
                <SelectForm className="form-select" id="sort_type" onChange={(e) => {setSelectSortType(e.target.value)}} value={selectSortType}>
                        <option value='ascending'>Ascending</option>
                        <option value='descending' selected>Descending</option>
                </SelectForm>
                <SearchBar type='text' placeholder='search...' onChange={(e) => {setSearchValue(e.target.value)}} value={searchValue}/>
                </div>
            </div>
        </div>
        <div className='row mt-4'>
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
                    {displayData
                    .filter((desc) => desc.description.toLowerCase().includes(searchValue))
                    .map(val => (
                        <tr key={val.id}>
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
    </div>
  )
}

export default TableData