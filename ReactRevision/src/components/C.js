import React, { Component } from 'react'

import { Consumer } from './Context'

export class C extends Component {
  render() {
    return (
      <div>
        <h1>Component C</h1>
        <Consumer>
            {
                ({data, handleCheck}) => (
                    <div>
                        <h3>{data.roll}, {data.name}</h3>
                        <button onClick={handleCheck}>Change Roll</button>
                    </div>
                )
            }
        </Consumer>
      </div>
    )
  }
}

export default C
