import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUser} from "../store/action-creator/user";
import {useAppDispatch} from "../store";
import {useActions} from "../hooks/useActions";



const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user);
    const {fetchUser} = useActions();

    useEffect(() => {
        fetchUser();
    },[]);


    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error!</div>;
    }

    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UserList;
