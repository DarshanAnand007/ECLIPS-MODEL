import React from 'react';



function button() {
    const handleClick = () => {
        window.location.href = "https://www.example.com";
    };

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
}

export default button;
