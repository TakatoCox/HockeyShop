import React from 'react';
import './home.css'

const Home = () => {
    return ( 
        <div className="homePage">
            <img className="bauer" src={require('./bauer.png')} alt="Bauer Hockey" />
            <img className="ccm" src={require('./ccm.png')} alt="CCM Hockey" />
            <img className="graf" src={require('./graf.png')} alt="Graf Hockey" />
            <img className="true" src={require('./true.png')} alt="True Hockey" />
            <img className="sherwood" src={require('./sherwood.png')} alt="SherWood Hockey" />
            <img className="warrior" src={require('./warrior.png')} alt="Warrior Hockey" />
        </div>
     );
}
 
export default Home