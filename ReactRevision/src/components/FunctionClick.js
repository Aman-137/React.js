import React from 'react'

function FunctionClick() {

    function changeEvent() {
        console.log("Hello Event Handling...");
    }

    return (
        <div>
            <h1>Hello fuctionClick</h1>
            <button onClick={changeEvent}>Click me</button>
        </div>
    )
}

export default FunctionClick
