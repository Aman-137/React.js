import React, { Component } from 'react'

class Product extends Component {
  render() {
    return (
      <div>
        <Cart/>
      </div>
    )
  }
}

export default Product

class Cart extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         qty: 0
      }
    }

    updatQnty = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }

    componentDidMount() {
        console.log("Executes after component render")
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("Component Update");
    }

    render() {
        return(
            <div>
                <h1>CARt : {this.state.qty}</h1>
                <button onClick={this.updatQnty}>Update Quantity</button>
            </div>
        )
    }
}