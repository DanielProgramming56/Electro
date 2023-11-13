import React from 'react';
import "../styles/categoryHeader.scss"
import {Link} from "react-router-dom"
const CategoryHeader = () => {
    return (
        <div className='category-container'>
            <Link  to="#">Home</Link>
            <Link to="#">Hot Deal</Link>
            <Link to="#">Categories</Link>
            <Link to="#">Laptop</Link>
            <Link to="#">SmartPhone</Link>
            <Link to="#">Cameras</Link>
            <Link to="#">Accessories</Link>
        </div>
    );
}

export default CategoryHeader;
