import React, {useContext} from 'react';
import Navigation from "./Nagivation";
import Header from "./Header";
import Body from "./Body";
import {UserContext} from "./App";

function PageLayout() {
    const user = useContext(UserContext)
    return (
        <div className="PageLayout">
            <Header user={user}/>
            <Navigation/>
            <Body user={user}/>
        </div>
    );
}

export default PageLayout;
