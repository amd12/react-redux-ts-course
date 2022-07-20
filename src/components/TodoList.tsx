import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import PaginationTodoList from "./Pagination/PaginationTodoList";

const TodoList: React.FC = () => {
    const {page, limit, todos, error, loading} = useTypedSelector(state => state.todo);
    const {fetchTodos, setPage} = useActions();

    useEffect(() => {
        fetchTodos(page, limit);
    }, [page]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error!</div>;
    }

    return (
        <div>
            {todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)}

                {todos &&
                        <PaginationTodoList todos={todos} page={page}/>
                }
        </div>
    );
};

export default TodoList;
