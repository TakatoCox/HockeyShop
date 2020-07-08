import * as actions from './cartActionType'

let initialState=[];

const cartReducer = (state=initialState, action)=>{
    switch(action.type){
        case actions.ADD_CART:
            return  [...state, action.payload]
        case actions.REMOVE_CART:
          let tempState = state.filter(item=>item.itemId!==action.payload);
            return tempState;
        default:
            return state
    }
}

export default cartReducer