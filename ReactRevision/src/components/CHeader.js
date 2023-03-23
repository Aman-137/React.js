import React from 'react'
import Testing from './Testing';

class CHeader extends React.Component {
    
    state = {
        users : [
            {id: 1, name: "brian", class: "A"},
            {id: 2, name: "fernando", class: "B"}
        ]
    }
    
    render() {
        /*const newUsers = this.state.users.map((user) => {
            return (
                <li key={user.id}>
                    {user.id}
                    {user.name}
                    {user.class}
                </li>
            )
        });*/

        return (
            <div>
                <h1>Hello {this.props.name} {this.props.last}</h1>
                {
                    this.state.users.map((user) => {
                        return (
                            /*<h1 key={user.id}>
                                {user.id}
                                {user.name}
                                {user.class}
                            </h1>*/

                            <Testing key={user.id} value={user.id}></Testing>
                        )
                    })
                }
                
            </div>
        )
    }
}
export default CHeader;
