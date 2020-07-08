import * as actions from './cartActionType'

export const addCart=(itemObj)=>{
return {
        type: actions.ADD_CART,
        payload: itemObj
    }
}
export const removeCart=(itemId)=>{
    return {
            type: actions.REMOVE_CART,
            payload: itemId
        }
    }
    