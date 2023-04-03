import React, { Component } from 'react'
//import C from './C'

import { Consumer } from './Context'

export class B extends Component {
  render() {
    return (
      <div>
        <div>Component B</div>
        <Consumer>
            {
                ({data}) => <h3>{data.name}</h3>
            }
        </Consumer>
        
      </div>
    )
  }
}

export default B
