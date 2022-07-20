export interface TodoState {
    todos: any[],
    loading: boolean,
    error: null | string
    page: number,
    limit: number,
}

export enum TodoActionTypes {
    FETCH_TODO = 'FETCH_TODO',
    FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
    FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
    SET_PAGE = 'SET_PAGE',
}

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODO
}
interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODO_SUCCESS,
    payload: any[]
}
interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODO_ERROR,
    payload: string
}
interface SetPageAction {
    type: TodoActionTypes.SET_PAGE,
    payload: number
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetPageAction;
