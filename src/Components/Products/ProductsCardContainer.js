import React, {useEffect} from 'react';
import { ToastContainer } from 'react-toastify';

import ProductCarouselItem from "./ProductCarouselItem";

const CardProductsContainer = () => {

    return (
        <div className="fashion_section">
            <div id="main_slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div className="container">
                            <h1 className="fashion_taital">Man & Woman Fashion</h1>
                            <div className="fashion_section_2">
                                <div className="row">
                                   <ProductCarouselItem />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                    <i className="fa fa-angle-left"/>
                </a>
                <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                    <i className="fa fa-angle-right"/>
                </a>
            </div>
            <div className="loader_main">
                <div className="loader"/>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CardProductsContainer;