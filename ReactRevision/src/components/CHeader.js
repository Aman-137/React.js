import React from 'react'

class CHeader extends React.Component {
    
    state = {
        users : [
            {id: 1, name: "brian", class: "A"},
            {id: 2, name: "fernando", class: "B"}
        ]
    }
    
    render() {
        const newUsers = this.state.users.map((user) => {
            return (
                <li>
                    {user.id}
                    {user.name}
                    {user.class}
                </li>
            )
        });

        return (
            <div>
                <h1>Hello {this.props.name} {this.props.last}</h1>
                <h2>{newUsers}</h2>
            </div>
        )
    }
}
export default CHeader;
