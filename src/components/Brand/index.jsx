import React, { useEffect, useState } from 'react';
import "../../App.css";
import "./style.css";


function Brand() {

    const [brandList ,setBrandList] = useState([])
    const getBrandList = () => {
        fetch('https://radiant-stream-23882.herokuapp.com/api/v1/brand')
        .then(response => response.json())
        .then(brand => setBrandList(brand.data));
    }
    useEffect(() => {
        getBrandList()
    },[])


    return (
        <div className = "section_wrap">
            <div className ="section_title">
                <div className ="seperate"></div>
                <h3 className ="name">THƯƠNG HIỆU</h3>
            </div>
            <div className ="list_wrap">
                {brandList.map((brand) => (
                <img className='img_brand' key={brand._id} src={`https://radiant-stream-23882.herokuapp.com/img/brand/${brand.logo}`} alt={brandList.logo} />
                ))}
            </div>
        </div>
    );
}

export default Brand;