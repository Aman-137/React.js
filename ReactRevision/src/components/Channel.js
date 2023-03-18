import React from "react";

class Channel extends React.Component {
    constructor() {
        super();
        this.state = {
            msg: "Technical Suneja Youtube Channel."
        }
    }
    
    subscribe() {
        this.setState ({
            msg: "Thanks for Subscribing"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={() => { this.subscribe() }}>Subscribe</button>
            </div>
        )
    }
}

export default Channel;