import React from 'react';
import {addCart} from '../../redux/index';
import {removeCart} from '../../redux/index';
import {connect} from 'react-redux'
import { uuid } from 'uuidv4';
import "./skates.css"

const SkatesContainer = (props) => {
    return (  
        <div className="skatePage">
            <div className="skateTitle">
                <img style={{width: "30px"}} src={require('./bauerSkates.png')} alt="icehockey" />
                Skates
                <img style={{width: "30px"}} src={require('./bauerSkates.png')} alt="icehockey" />
            </div>
            <div className="skateDisplay" style={{display:"flex",flexDirection:"row", backgroundColor:"white"}}>
                <div className="itemSkate">
                    <img style={{width: "250px", marginLeft:"3px"}} src={require('./bauerSkates.png')} alt="icehockey" />
                    <div className="skateBrand">Bauer Skates</div>
                    <div className="skatePrice">$999.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Bauer Skates", price:999.99, itemId:uuid()})}>
                        Add To Cart
                    </button>                
                </div>
                <div className="itemSkate">
                    <img style={{width: "250px", marginLeft:"3px"}} src={require('./ccmSkates.jpg')} alt="icehockey" />
                    <div className="skateBrand">CCM Skates</div>
                    <div className="skatePrice">$1019.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "CCM Skates", price:1019.99, itemId:uuid()})}>
                        Add To Cart
                    </button>
                </div>
                <div className="itemSkate">
                    <img style={{width: "250px", marginLeft:"3px"}} src={require('./trueSkates.jpg')} alt="icehockey" />
                    <div className="skateBrand">True Skates</div>
                    <div className="skatePrice">$959.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "True Skates", price:959.99, itemId:uuid()})}>
                        Add To Cart
                    </button>
                </div>
                <div className="itemSkate">
                    <img style={{width: "250px", marginLeft:"3px"}} src={require('./grafSkates.jpg')} alt="icehockey" />
                    <div className="skateBrand">Graph Skates</div>
                    <div className="skatePrice">$799.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Graph Skates", price:799.99, itemId:uuid()})}>
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

export default connect(mapStateToProps, mapDispatchToProps)(SkatesContainer)