import  ActionTypes from '../Action/action';

export default class TodoMdware{
    static asyncTodo(){
        return (dispatch) =>{
            dispatch(ActionTypes.changeName())
        }
    }
}
