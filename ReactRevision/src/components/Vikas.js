import React, {Component} from 'react'

class Vikas extends Component {

    state = {
        marks: 0
    }
    
    marksIncremented = () => {
        this.setState({
            marks: this.state.marks + 1
        })
    }

    render() {
        return (
            <div>
                <h2 onMouseOver={this.marksIncremented}>Vikash's Marks {this.state.marks}</h2>
            </div>
        )
    }
}

export default Vikas
