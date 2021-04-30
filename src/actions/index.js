import axios from 'axios';


export const fetchAccounts = (tableData) => async dispatch => {


    const response= await axios.post('http://localhost:8000/api/showall',tableData);
    dispatch({type:'FETCH_ACCOUNTS',payload: response.data.CustDetails})

}

export const fetchCount = (tableData) => async dispatch => {


    const response= await axios.post('http://localhost:8000/api/showall',tableData);
    dispatch({type:'FETCH_COUNT',payload:response.data.count})

}