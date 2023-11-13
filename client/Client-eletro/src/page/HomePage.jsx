import React from 'react';
import CategoryHeader from '../components/categoryHeader';
import CategoryProductBox from '../components/CategoryProductBox';
const HomePage = () => {
    return (
        <div style={{height: "100vh"}}>
            <CategoryHeader/>
            <CategoryProductBox/>
        </div>
    );
}

export default HomePage;
