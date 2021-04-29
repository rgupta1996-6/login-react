import axios from 'axios';


export const fetchAccounts = (tableData) => async dispatch => {

    console.log(tableData);
    const response= await axios.post('http://localhost:8000/api/showall',tableData);
    console.log(response);
    dispatch({type:'FETCH_ACCOUNTS',payload: response.data.CustDetails,count:response.data.count})

}

export const fetchCount = (tableData) => async dispatch => {

    console.log(tableData);
    const response= await axios.post('http://localhost:8000/api/showall',tableData);
    console.log(response);
    dispatch({type:'FETCH_COUNT',payload:response.data.count})

}