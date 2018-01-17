import * as actionTypes from '../actions';
import {CART_REMOVE_ITEM} from '../../MyCart/actions';

function itemsHasErrored(state, action) {
    let result = {...state, hasErrored: action.hasErrored}
    return result;
}

function itemsIsLoading(state, action) {
    let result = {...state, isLoading: action.isLoading}
    return result;
}

function getItems(state, action) {
    let result = {...state, items: action.items}
    return result;
}


function removeItemFromCart(state, action) {
    let item =  {...action.item, addedToCart: false };
    let index = state.items.findIndex(item => item.id === action.item.id);
    return {
            ...state, 
            items: [
                    ...state.items.slice(0,index),
                    item,
                    ...state.items.slice(index+1)
                    ]
    };
}

function addItemToCart(state, action) {
    let item =  {...action.item, addedToCart: true };
    return {
            ...state, 
            items: [
                    ...state.items.slice(0,action.index),
                    item,
                    ...state.items.slice(parseInt(action.index)+1)
                    ]
    };
}

const initialState = {
    items: [],
    hasErrored: false,
    isLoading: false
};

const ACTION_HANDLERS = {
    [actionTypes.ITEMS_HAS_ERRORED] : (state, action) => itemsHasErrored(state,action),
    [actionTypes.ITEMS_IS_LOADING]: (state, action) => itemsIsLoading(state,action),
    [actionTypes.ITEMS_FETCH_DATA_SUCCESS] : (state, action) => getItems(state,action),
    [actionTypes.ITEMS_ADD_TO_CART] : (state, action) => addItemToCart(state,action),
    [CART_REMOVE_ITEM] : (state, action) => removeItemFromCart(state,action),
};

export default function itemsReducer (state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    const resultState = handler ? handler(state, action) : state
    return resultState
};
