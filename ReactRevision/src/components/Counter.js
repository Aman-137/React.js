import React, {Component} from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    handleClick = (e) => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        const {counter} = this.state;
        return (
            <div>
                <h2>Class Counter</h2>
                <button onClick={this.handleClick}>Counter: {counter}</button>
            </div>
        )
    }
}

export default Counter
