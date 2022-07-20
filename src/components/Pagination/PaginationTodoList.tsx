import React from 'react';
import {useActions} from "../../hooks/useActions";

interface IProps{
    todos: any[];
    page: number;
}

const PaginationTodoList = (props: IProps)  => {

    const { setPage} = useActions();
    const allPages = props.todos.length;
    const arrPages = Array.from({length: allPages}, (x, i) => i+1);

    return (
        <div className='contener' style={{display: "flex"}}>
            {arrPages.map(p =>
                    <div className="pagination" style={{border: p === props.page ? '2px solid green' : '1px solid grey', padding: 10, margin: 10}}
                         key={p}><a onClick={() => setPage(p)}>{p}</a>
                    </div>)}
        </div>
    );
};

export default PaginationTodoList;
