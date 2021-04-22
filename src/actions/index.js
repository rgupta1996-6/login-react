import axios from 'axios';


export const fetchAccounts = () => async dispatch => {

    const response= await axios.get('http://localhost:8000/api/showall');

    dispatch({type:'FETCH_ACCOUNTS',payload: response.data})

}