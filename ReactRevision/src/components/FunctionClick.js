import React from 'react'

function FunctionClick() {

    function changeEvent(e) {
        e.preventDefault();
        console.log("Hello Event Handling...");
    }

    return (
        <React.Fragment>
            <h1>Hello fuctionClick</h1>
            <button onClick={changeEvent}>Click me</button>
            <a href='https://www.amazon.in/' onClick={changeEvent}>Anchor me</a>
        </React.Fragment>
    )
}

export default FunctionClick
