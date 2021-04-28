import axios from 'axios';


export const fetchAccounts = (tableData) => async dispatch => {

    console.log(tableData);
    const response= await axios.post('http://localhost:8000/api/showall',tableData);

    dispatch({type:'FETCH_ACCOUNTS',payload: response.data})

}