import React from 'react';

const Hello = ({ name }) => {
    return (
    <div className="hello-container">
        <h1>Hello, {name ? name : 'Guest'}!</h1>
    </div>
    );
};

export default Hello ;