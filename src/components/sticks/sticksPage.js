import React from 'react';
import {addCart} from '../../redux/index';
import {connect} from 'react-redux'
import { uuid } from 'uuidv4';
import "./sticks.css"

const SticksContainer = (props) => {
    return (  
        <div className="stickPage">
            <div className="stickTitle">
                <img style={{width: "10px", height:"30px"}} src={require('./ccmStick.jpg')} alt="icehockey" />
                Sticks
                <img style={{width: "10px", height:"30px"}} src={require('./grafStick.jpg')} alt="icehockey" />
            </div>
            <div className="stickDisplay" style={{display:"flex",flexDirection:"row", backgroundColor:"white"}}>
                <div className="item">
                    <img style={{width: "100px", marginLeft:"3px",height:"350px"}} src={require('./bauerStick.png')} alt="icehockey" />
                    <div className="stickBrand">Bauer Stick</div>
                    <div className="price">$299.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Bauer Stick", price:299.99, itemId:uuid()})}>
                        Add To Cart
                    </button>                
                </div>
                <div className="item">
                    <img style={{width: "100px", height:"350px", marginLeft:"3px"}} src={require('./warriorStick.png')} alt="icehockey" />
                    <div className="stickBrand">Warrior Stick</div>
                    <div className="price">$289.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Warrior Stick", price:289.99, itemId: uuid()})}>
                        Add To Cart
                    </button>
                </div>
                <div className="item">
                    <img style={{width: "100px", marginLeft:"3px",height:"350px"}} src={require('./ccmStick.jpg')} alt="icehockey" />
                    <div className="stickBrand">CCM Stick</div>
                    <div className="price">$319.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "CCM Stick", price:319.99, itemId:uuid()})}>
                        Add To Cart
                    </button>
                </div>
                <div className="item">
                    <img style={{width: "100px", marginLeft:"3px", height:"350px"}} src={require('./trueStick.jpg')} alt="icehockey" />
                    <div className="stickBrand">True Stick</div>
                    <div className="price">$249.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "True Stick", price:249.99, itemId:uuid()})}>
                        Add To Cart
                    </button>
                </div>
                <div className="item">
                    <img style={{width: "100px", marginLeft:"3px", height:"350px"}} src={require('./sherwoodStick.jpg')} alt="icehockey" />
                    <div className="stickBrand">SHERWOOD Stick</div>
                    <div className="price">$99.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Sherwood Stick", price:99.99, itemId:uuid()})}>
                        Add To Cart
                    </button>
                </div>
                <div className="item">
                    <img style={{width: "100px", marginLeft:"3px", height:"350px"}} src={require('./grafStick.jpg')} alt="icehockey" />
                    <div className="stickBrand">Graph Stick</div>
                    <div className="price">$199.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Graph Stick", price:199.99, itemId:uuid()})}>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SticksContainer)