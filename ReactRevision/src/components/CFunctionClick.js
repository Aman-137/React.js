import React, { Component } from 'react'

class CFunctionClick extends Component {
    
    constructor(props) {
        super(props);
        //this.changeEvent2 = this.changeEvent2.bind(this);

        this.state = {
            course: "BTech",
            roll: this.props.roll
        }
    }

    // make this function as an arrow function to access "this" directly.
    changeEvent2 = () => {

        this.setState ({
            course: "MTech"
        })
        console.log("Hello Event Handling class comp...", this.props.roll, this.state.course);
    }

    render() {
      const numbers = this.props.numbers;
      //const newNumbers = numbers.map((numbers) => {return <li>{numbers}</li>});
        //console.log(numbers);
        
      //console.log(newNumbers);

    return (
      <div>
        <h1>Class Function click</h1>
        <button onClick={this.changeEvent2}>Hit me</button>
        {this.props.roll}
        <ul>
          {
            numbers.map((numbers) => <li>{numbers}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default CFunctionClick
