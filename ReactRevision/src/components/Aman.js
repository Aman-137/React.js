import React, {Component} from 'react'

import subjects from './HOC';

class Aman extends Component {

    state = {
        marks: 0
    }

    marksChanged = () => {
        this.setState({
            marks: this.state.marks + 1
        })
    }

    render() {
        return (
            <div>
                <h2 onMouseOver={this.marksChanged}>Aman's Marks {this.state.marks}, {this.props.hocsub}</h2>
            </div>
        )
    }
}

export default subjects(Aman);
