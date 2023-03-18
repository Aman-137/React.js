import React, { Component } from 'react'

class CFunctionClick extends Component {
    
    changeEvent2() {
        console.log("Hello Event Handling class comp...");
    }

    render() {
    return (
      <div>
        <h1>Class Function click</h1>
        <button onClick={this.changeEvent2}>Click me</button>
      </div>
    )
  }
}

export default CFunctionClick
