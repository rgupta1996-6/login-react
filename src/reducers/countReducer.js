export default (state= 0, action) => {
    switch (action.type){
        case 'FETCH_COUNT':
            return action.payload;
        default:
            return state;

    }
};