import React, {Component} from 'react'

class ClassCounterOne extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    componentDidMount() {
        console.log("Checking..");
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Testing..");
        document.title = `Class Clicked ${this.state.count} times`;
    }
    
    
    render() {
        return (
            <div>
                <button onClick={(e) => {this.setState({count: this.state.count + 1})}}>Class Click {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounterOne
