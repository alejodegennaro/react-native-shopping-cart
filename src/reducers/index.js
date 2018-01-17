import { combineReducers } from 'redux';
import itemsReducer from '../pages/ShopList/reducers'
import cartReducer from '../pages/MyCart/reducers'

export default combineReducers({
	//each page reducer goes here
    itemsReducer,
    cartReducer
});
