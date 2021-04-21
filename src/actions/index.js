export const newAccount = data =>{
    return{
        type: 'NEW_ACCOUNT',
        payload: data
    };
};

export const creditBalance = amount => {
    return{
        type: 'CREDIT_BALANCE',
        payload: amount
    };
};

export const debitBalance = amount => {
    return{
        type: 'DEBIT_BALANCE',
        payload: amount
    };
};

export const deleteAccount = accID => {
    return{
        type: 'DELETE_ACCOUNT',
        payload: accID
    };
};
