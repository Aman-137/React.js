import React, {Component} from 'react';
import B from './B';
import C from './C';

import { Provider } from './Context';

class A extends Component {

    state = {
        name: 'Aman Kumar',
        roll: 0
    }
    handleClickContext = () => {
        this.setState({
            roll: this.state.roll + 1
        })
    }

    render() {
        const contextValue = {
            data: this.state,
            handleCheck: this.handleClickContext
        }
        return (
            <div>
                <h1>Component A</h1>
                <Provider value={contextValue}>
                    <B />
                    <C />
                </Provider>
                
            </div>
        )
    }
}

export default A
