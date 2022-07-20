import axios from "axios";
import {Dispatch} from "react";
import {TodoAction, TodoActionTypes} from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10)  => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type:TodoActionTypes.FETCH_TODO});
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos',{params: {_page: page, _limit: limit} });
            setTimeout(() => {
                dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data});
            }, 2000);
        }catch (e) {
            dispatch({type: TodoActionTypes.FETCH_TODO_ERROR, payload: 'Error loading users'});
        }
    }
};

export const setPage = (page: number) => {
    return {
        type: TodoActionTypes.SET_PAGE,
        payload: page
    }
}
