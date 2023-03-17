import React from 'react'

class CHeader extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.name} {this.props.last}</h1>
            </div>
        )
    }
}
export default CHeader;
