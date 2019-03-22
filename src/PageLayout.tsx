import React, {useContext} from 'react';
import Navigation from "./Nagivation";
import Body from "./Body";
import {UserContext} from "./App";
import UserHeader from "./UserHeader";

function PageLayout() {
    const user = useContext(UserContext)
    return (
        <div className="PageLayout">
            <UserHeader/>
            <Navigation/>
            <Body/>
        </div>
    );
}

export default PageLayout;
