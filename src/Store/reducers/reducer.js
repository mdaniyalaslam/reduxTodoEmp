import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    // userName : 'Daniya',
    todos : []
}



export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        // case ActionTypes.USERNAME:
        // return ({
        //     ...state,
        //     userName: action.payload
        // })
   
        default:
            return state;
    }
}





// export default (state=0, action) => {
//     switch(action.type){
//         case ActionTypes.INCREMENT:
//             return state + 1;
//         case ActionTypes.DECREMENT:
//             return state -1;
//         case ActionTypes.ADD:
//             return state -1;
//         default:
//             return state;
//     }
// }