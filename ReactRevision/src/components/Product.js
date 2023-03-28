import React, {Component} from 'react'

class Product extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ProductId: '',
            qty: 0
        }
    };

    addToCart = (pid) => {
        //console.log(pid)
        this.setState({
            ProductId: pid,
            qty: this.state.qty + 1
        })
    }




    render() {
        return (
            <div>
                <button onClick={() => {this.addToCart(1)}}>Add To Cart</button>
                <Cart ProductId={this.state.ProductId} qty={this.state.qty} />
            </div>
        )
    }
}

export default Product

class Cart extends Component {

    constructor(props) {
        super(props)

        this.state = {
            qty: this.props.qty
        }
    }

    /*updatQnty = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }*/

    static getDerivedStateFromProps(props, state) {
        console.log(props.qty);
        console.log(state.qty);
        
        if (props.qty !== state.qty) {
            return { qty: props.qty }
        }
        return null;
    }

    componentDidMount() {
        console.log("Executes after component render")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component Update");
    }

    render() {
        return (
            <div>
                <h1>CARt : {this.state.qty}</h1>
                <button onClick={this.updatQnty}>Update Quantity</button>
            </div>
        )
    }
}