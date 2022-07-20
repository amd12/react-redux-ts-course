import {UserAction, UserActionTypes} from "../../types/users";
import axios from "axios";
import {Dispatch} from "react";

export const fetchUser = ()  => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USER});
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setTimeout(() => {
                console.log('fetchUser');
            dispatch({type: UserActionTypes.FETCH_USER_SUCCESS, payload: response.data});
            }, 2000);
        }catch (e) {
            dispatch({type: UserActionTypes.FETCH_USER_ERROR, payload: 'Error loading users'});
        }
    }
};
