import React, {useState} from 'react';
import './App.css';
import Page from "./Page";

export const UserContext = React.createContext("");

function App() {
    const [user, setUser] = useState("type your name")
    return (
        <div className="App">
            <h3>
                User Name: <input onChange={(e) => setUser(e.target.value)}/>
            </h3>
            <UserContext.Provider value={user}>
                <Page/>
            </UserContext.Provider>
        </div>
    );
}

export default App;
