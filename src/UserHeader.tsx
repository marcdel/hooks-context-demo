import React, {useContext} from 'react';
import {UserContext} from "./App";
import Header from "./Header";

function UserHeader() {
    const user = useContext(UserContext)

    return (
        <Header user={user}/>
    );
}

export default UserHeader;
