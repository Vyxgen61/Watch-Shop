import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../components/Banner';
import Brand from '../../components/Brand';
import ProductList from '../../components/ProductList';
import News from '../../components/News';

HomePage.propTypes = {
    
};

function HomePage(props) {
    return (
        
        <div className ="container">
            <Banner/>
            <Brand/>
            <ProductList/>
            <News/>
        </div>
    );
}

export default HomePage;