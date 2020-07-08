import React from 'react';
import {addCart} from '../../redux/index';
import {removeCart} from '../../redux/index';
import {connect} from 'react-redux'
import { uuid } from 'uuidv4';
import "./undergear.css"

const UndergearContainer = (props) => {
    return (  
        <div className="undergearPage">
            <div className="undergearTitle">
                <img style={{width: "30px"}} src={require('./shortShirt.jpg')} alt="icehockey" />
                Undergear
                <img style={{width: "30px"}} src={require('./shortShirt.jpg')} alt="icehockey" />
            </div>
            <div className="undergearDisplay" style={{display:"flex",flexDirection:"row", backgroundColor:"white"}}>
                <div className="itemUndergear">
                    <img style={{width: "250px", marginLeft:"3px",height:"300px"}} src={require('./jock.jpg')} alt="icehockey" />
                    <div className="undergearBrand">Jock Shorts</div>
                    <div className="undergearPrice">$99.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Jock Shorts", price:99.99, itemId:uuid()})}>
                        Add To Cart
                    </button>                
                </div>
                <div className="itemUndergear">
                    <img style={{width: "250px", height:"350px", marginLeft:"3px"}} src={require('./longJock.jpg')} alt="icehockey" />
                    <div className="stickBrand">long Jock</div>
                    <div className="undergearPrice">$119.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Long Jock", price:119.99, itemId: uuid()})}>
                        Add To Cart
                    </button>
                </div>
                <div className="itemUndergear">
                    <img style={{width: "275px", marginLeft:"3px",height:"270px"}} src={require('./longShirt.jpg')} alt="icehockey" />
                    <div className="undergearBrand">Long Sleeve Shirt</div>
                    <div className="undergearPrice">$79.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Long Sleeve Shirt", price:79.99, itemId:uuid()})}>
                        Add To Cart
                    </button>
                </div>
                <div className="itemUndergear">
                    <img style={{width: "250px", marginLeft:"3px", height:"270px"}} src={require('./shortShirt.jpg')} alt="icehockey" />
                    <div className="undergearBrand">Short Sleeve Shirt</div>
                    <div className="undergearPrice">$49.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Short Sleeve Shirt", price:49.99, itemId:uuid()})}>
                        Add To Cart
                    </button>
                </div>
                <div className="itemUndergear">
                    <img style={{width: "300px", marginLeft:"3px", height:"300px"}} src={require('./socks.jpg')} alt="icehockey" />
                    <div className="undergearBrand">Socks</div>
                    <div className="undergearPrice">$29.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Socks", price:29.99, itemId:uuid()})}>
                        Add To Cart
                    </button>
                </div>
            </div>
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
        addCart: itemObj=>dispatch(addCart(itemObj)),
        removeCart: itemId=>dispatch(removeCart(itemId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UndergearContainer)