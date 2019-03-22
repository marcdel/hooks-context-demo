import React, {useContext} from 'react';
import {UserContext} from "./App";
import Link from "./Link";

function UserLink() {
    const user = useContext(UserContext)

    return (
        <Link text={user}/>
    );
}

export default UserLink;
