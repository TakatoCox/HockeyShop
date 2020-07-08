import React from 'react';
import './cart.css';
import {removeCart} from '../../redux/index';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'



const CartPage = (props) => {

const cartTotal = state =>{
    let total = 0;
    state.map(item=>
        total = total+(item.price)
        )
    return Math.round(100*total)/100;
}

    return ( 
        <div className="cartPage">
            <div  className="cartTitle">
                <img className="cartLogo" src={require('./cart.png')} alt="icehockey" />
                    <div>Your Cart</div>
                <img className="cartLogo" src={require('./cart.png')} alt="icehockey" />
            </div>

            <div className="itemsContainer">
                <div className="itemsTitle">Your Items:</div><br/>
                    <div className="list">
                        <div className="removeDescription">Remove</div>
                        
                        {props.numItems.length>0?
                            props.numItems.map(item=>
                                <li key={item.itemId} className="listItem">
                                    {item.item} (${item.price})
                            <div className="remove" onClick={()=>props.removeCart(item.itemId)}>X</div>
                                </li>
                            ):
                            <div>Your Cart Is Empty</div>
                        }
                    </div>

                    <div className="bottomLine"></div><br/>

                    <div className="total">
                        Total: ${cartTotal(props.numItems)}
                    </div>
            </div>
            <Link to="/checkout">
                <button className="checkout">Checkout</button>
            </Link>
        </div>
     );
}


const mapStateToProps=state=>{
    return {
        numItems: state.cart
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        removeCart: itemId=>dispatch(removeCart(itemId))
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)