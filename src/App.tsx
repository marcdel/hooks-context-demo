import React from 'react';
import './App.css';
import Page from "./Page";

export const UserContext = React.createContext("");

function App() {

    return (
        <div className="App">
            <UserContext.Provider value="Marc">
                <Page/>
            </UserContext.Provider>
        </div>
    );
}

export default App;
