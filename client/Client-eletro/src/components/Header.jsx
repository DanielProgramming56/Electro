import React from "react";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import "../styles/header.scss";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
const Header = () => {
  return (
    <div className="header-container">
      <div className="upper-div">
        <div>
          <ul>
            <li><LocalPhoneIcon  style={{fontSize: "15px"}}/></li>
            <li>+402-34-23-86</li>
          </ul>
          <ul>
            <li><EmailIcon style={{fontSize: "15px"}}/></li>
            <li>email@email.com</li>
          </ul>
          <ul>
            <li><PlaceIcon style={{fontSize: "15px"}}/></li>
            <li>1454 stonecoal Road</li>
          </ul>
        </div>
        <div>
          <ul>
            <li><AttachMoneyIcon style={{fontSize: "15px"}}/></li>
            <li>USD</li>
          </ul>
          <ul>
            <li><LockIcon style={{fontSize: "15px"}}/></li>
            <li>My Account</li>
          </ul>
        </div>
      </div>
      <div className="mid-div"> 
      <Link to="/">
        <img src={Logo} alt="logo"/>
        </Link>
        <div className="search-div">
          <select>
            <option selected>All Categories</option>
            <option>Category 01</option>
            <option>Category 02</option>
          </select>
          <input placeholder="Search here"/>
          <button>Search</button>
        </div>
        <div className="fav-div">
          <div>
            <FavoriteBorderIcon style={{fontSize: "2em"}}/>
            <span>Wishlist</span>
            <div>2</div>
          </div>
          <div>
          <ShoppingCartOutlinedIcon style={{fontSize: "2em"}}/>
          <span>Cart</span>
            <div>3</div>
          </div>
          <div className="menu">
          <MenuOutlinedIcon style={{fontSize: "2em"}}/>
          </div>
        </div>
      </div>
      <div className="lower-div"></div>
    </div>
  );
};

export default Header;
