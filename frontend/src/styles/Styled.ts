import styled from 'styled-components'; 
import searchIcon from '../assets/search.png';

export const InputForm = styled.input({
    border: '1px solid #555',
    borderRadius: '8px', 
    height: '45px'
}) 

export const AmountForm = styled.input({
    border: '1px solid #555',
    borderRadius: '8px', 
    height: '60px'
}) 

export const SelectForm = styled.select({
    border: '1px solid #555',
    borderRadius: '8px', 
    height: '45px'
})

export const BlueButton = styled.button({
    border: 'none', 
    color: 'white', 
    fontWeight: 'bold',
    width: '385px',
    height: '45px',
    borderRadius: '8px',
    backgroundColor: '#4ea5ea'
})

export const ModalButton = styled.button({
    border: '1px solid #4ea5ea',
    backgroundColor: 'white', 
    borderRadius: '8px',
    height: '45px',
    width: '80px',
    color: '#4ea5ea',
    fontWeight: 'bold'
})

export const SearchBar = styled.input({
    border: '1px solid #555',
    borderRadius: '8px', 
    height: '45px', 
    display: 'block',
    padding: '8px 2px 8px 40px', 
})

export const SelectShowType = styled.select({
    border: '1px solid #555',
    borderRadius: '8px', 
    height: '45px',
    width: '250px'
})