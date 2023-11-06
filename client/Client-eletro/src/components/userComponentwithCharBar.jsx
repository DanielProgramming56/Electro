import React from 'react';
import { Outlet } from 'react-router-dom';
import UserChatComponent from './UserChatComponent';
const UserComponentwithCharBar = () => {
    return (
        <>
            <UserChatComponent/>
            <Outlet/>
        </>
    );
}

export default UserComponentwithCharBar;
