import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {connect} from 'react-redux'
import MenuContainer from './menuOptions';
import './navBar.css';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar  className="navBar">
          <Link to="/HockeyShop/" style={{textDecoration:'none', color:"white", width:"20%"}}>            
            <div className="nameLogo">
              Tak's Hockey<img className="logo" src={require('./ice-hockey.png')} alt="icehockey" />
            </div>
          </Link>

          <MenuContainer/> {/*Menu*/}

          <Link to="/cart" style={{textDecoration:'none', color:"white"}}>
          <div className="cartWithCount">
            <div className="cartNumber">{props.numItems.length}</div>
            <img className="cartLogo" src={require('./cart.png')} alt="icehockey" />
          </div>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps=state=>{
  return {
      numItems: state.cart
  }
}

export default connect(mapStateToProps, null)(Header)
