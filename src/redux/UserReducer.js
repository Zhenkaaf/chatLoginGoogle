const SET_USER = 'SET_USER';
const DEL_USER = 'DEL_USER';

let initialState = {
    isAuth: null,
    fullName: null,
    email: null
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: {
            /* let stateCopy = { ...state };
            stateCopy.isAuth = action.isAuth,
            stateCopy.fullName = action.fullName,
            stateCopy.email = action.email
            return stateCopy; */
            let stateCopy = {
                ...state,
                isAuth: action.isAuth,
                fullName: action.fullName,
                email: action.email
            }
            return stateCopy;
        }
        case DEL_USER: {
            let stateCopy = {
                ...state,
                isAuth: null,
                fullName: null,
                email: null
            }
            return stateCopy;
        }
        default: 
        return state;
    }
}


export const setUserAC = (isAuth, fullName, email) => {
    return {
        type: 'SET_USER',
        isAuth,
        fullName,
        email
    }
}
export const delUserAC = () => {
    return {
        type: 'DEL_USER',
        isAuth: null,
        fullName: null,
        email: null
    }
}




export default UserReducer;
