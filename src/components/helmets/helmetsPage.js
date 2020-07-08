import React from 'react';
import {addCart} from '../../redux/index';
import {removeCart} from '../../redux/index';
import {connect} from 'react-redux'
import { uuid } from 'uuidv4';
import "./helmet.css"

const HelmetsContainer = (props) => {
    return (  
        <div className="helmetPage">
            <div className="helmetTitle">
                <img style={{width: "30px"}} src={require('./bauerHelmet.jpg')} alt="icehockey" />
                Helmets
                <img style={{width: "30px"}} src={require('./bauerHelmet.jpg')} alt="icehockey" />
            </div>

            
            <div className="helmetDisplay" style={{display:"flex",flexDirection:"row", backgroundColor:"white"}}>
                <div className="itemHelmet">
                    <img style={{width: "250px", marginLeft:"3px"}} src={require('./bauerHelmet.jpg')} alt="icehockey" />
                    <div className="helmetBrand">Bauer Helmet</div>
                    <div className="helmetPrice">$249.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Bauer Helmet", price:249.99, itemId:uuid()})}>
                        Add To Cart
                    </button>                
                </div>
                <div className="itemHelmet">
                    <img style={{width: "250px", marginLeft:"3px"}} src={require('./ccmHelmet.jpg')} alt="icehockey" />
                    <div className="helmetBrand">CCM Helmet</div>
                    <div className="helmetPrice">$309.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "CCM Helmet", price:309.99, itemId:uuid()})}>
                        Add To Cart
                    </button>
                </div>
                <div className="itemHelmet">
                    <img style={{width: "250px", marginLeft:"3px"}} src={require('./warriorHelmet.jpg')} alt="icehockey" />
                    <div className="helmetBrand">Warrior Helmet</div>
                    <div className="helmetPrice">$199.99</div>
                    <button 
                        className="addCartButton" 
                        onClick={()=>props.addCart({item: "Warrior Helmet", price:199.99, itemId:uuid()})}>
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

export default connect(mapStateToProps, mapDispatchToProps)(HelmetsContainer)