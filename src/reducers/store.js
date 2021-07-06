import {createStore} from 'redux';

const initialState = {
    number: 0,
};

function reducer (state = initialState, action) {
    switch (action.type) {
        case 'INCREASE':
            return {
                number: state.number +1 ,
            };
        case 'DECREASE':
            return {
                number: state.number -1,
            };
        case 'RESET':
            return { 
                number: 0
            }
        default:    
            return state;
    }
}

export default createStore(reducer);