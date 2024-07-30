import React from 'react';
import {useParams} from "react-router-dom";

import GetProductsForCategoryHook from "../../hook/product/getProductsForCategoryHook";
import ProductCard from "../../Components/Products/ProductCard";
import dressShirt from "../../images/dress-shirt-img.png";
import Loader from "../../Components/Uitily/Loader";

const ProductsForCategoryPage = () => {

    const { id } = useParams();
    const [data, category, loading] = GetProductsForCategoryHook(id);

    // console.log(category.name?.en)
    console.log(data)

    return (
        <div className="fashion_section">
            <div id="main_slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <div className="container">
                            <h1 className="fashion_taital">{'All product for ' + category?.name?.en || 'Product For Category'}</h1>
                            <div className="fashion_section_2">
                                <div className="row">
                                    {
                                        loading === false ? (
                                            data?.status === 404 ? (
                                                <h3>Not found products for category id: {id}</h3>
                                            ) : (
                                                data?.map((item, index)=> {
                                                    return (
                                                        <ProductCard img={dressShirt} product={item} key={index} />
                                                    )
                                                })
                                            )
                                        ) : <Loader />
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsForCategoryPage;