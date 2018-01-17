import * as actionTypes from '../actions';
import {ITEMS_ADD_TO_CART} from '../../ShopList/actions';


function removeItemFromCart(state, action) {
    let result ={...state, 
        cart: [
                  ...state.cart.slice(0,action.index),
                  ...state.cart.slice(parseInt(action.index)+1)
                ]       
    };
    return result;
}


function addItemToCart(state, action) {
    let item =  {...action.item, addedToCart: true };
    return {
            ...state, 
            cart: [...state.cart, item]                     
            };
}

const initialState = {
    cart: []
};

const ACTION_HANDLERS = {
    [ITEMS_ADD_TO_CART] : (state, action) => addItemToCart(state,action),
    [actionTypes.CART_REMOVE_ITEM] : (state, action) => removeItemFromCart(state,action),
};

export default function cartReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    const resultState = handler ? handler(state, action) : state
    return resultState
};
