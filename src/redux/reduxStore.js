import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import contactsReducer from "./ContactsReducer";
import thunkMiddleware from "redux-thunk";
import UserReducer from "./UserReducer";




const reducers = combineReducers({
    contacts: contactsReducer,
    user: UserReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
