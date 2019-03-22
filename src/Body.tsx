import React from 'react';

function Body({user}: {user: string}) {
    return (
        <div className="Body">
            Welcome: {user}
        </div>
    );
}

export default Body;
