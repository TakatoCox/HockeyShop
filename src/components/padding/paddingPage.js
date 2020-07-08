import React from 'react';
import {addCart} from '../../redux/index';
import {removeCart} from '../../redux/index';
import {connect} from 'react-redux'
import { uuid } from 'uuidv4';
import "./padding.css"

const UndergearContainer = (props) => {
    return (  
        <div className="paddingPage">
            <div className="paddingTitle">
                <img style={{width: "30px"}} src={require('./elbow.jpg')} alt="icehockey" />
                Padding
                <img style={{width: "30px"}} src={require('./elbow.jpg')} alt="icehockey" />
            </div>
            <div className="paddingDisplay" style={{display:"flex",flexDirection:"row", backgroundColor:"white"}}>
                <div className="itemPadding">
                    <img style={{width: "250px", marginLeft:"3px",height:"270px"}} src={require('./elbow.jpg')} alt="icehockey" />
                    <div className="paddingBrand">Elbow Pads</div>
                    <div className="paddingPrice">$119.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Elbow Pads", price:119.99, itemId:uuid()})}>
                        Add To Cart
                    </button>                
                </div>
                <div className="itemPadding">
                    <img style={{width: "250px", height:"320px", marginLeft:"3px"}} src={require('./gloves.jpg')} alt="icehockey" />
                    <div className="paddingBrand">Gloves</div>
                    <div className="paddingPrice">$139.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Gloves", price:139.99, itemId: uuid()})}>
                        Add To Cart
                    </button>
                </div>
                <div className="itemPadding">
                    <img style={{width: "275px", marginLeft:"3px",height:"320px"}} src={require('./shoulder.jpg')} alt="icehockey" />
                    <div className="paddingBrand">Shoulder Pads</div>
                    <div className="paddingPrice">$199.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Shoulder Pads", price:199.99, itemId:uuid()})}>
                        Add To Cart
                    </button>
                </div>
                <div className="itemPadding">
                    <img style={{width: "250px", marginLeft:"3px", height:"270px"}} src={require('./pants.jpg')} alt="icehockey" />
                    <div className="paddingBrand">Pants</div>
                    <div className="paddingPrice">$209.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Pants", price:209.99, itemId:uuid()})}>
                        Add To Cart
                    </button>
                </div>
                <div className="itemPadding">
                    <img style={{width: "250px", marginLeft:"3px", height:"260px"}} src={require('./shin.jpg')} alt="icehockey" />
                    <div className="paddingBrand">Shin Pads</div>
                    <div className="paddingPrice">$159.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Shin Pads", price:159.99, itemId:uuid()})}>
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