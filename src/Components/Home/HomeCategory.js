import React from 'react';

import SubTitle from '../Uitily/SubTitle';
import Loader from "../Uitily/Loader";
import GetAllCategoryHook from "../../hook/category/getAllCategories";

const HomeCategory = ({title, btntitle, pathText}) => {

    const [data, loading] = GetAllCategoryHook();
    console.log(data)

    return (
        <div className="popular-product">
            <div className="container">
                <SubTitle title={title} btntitle={btntitle} pathText={pathText} />
                <div className="row">

                    {
                        loading === false ? (
                            data ? (
                                data?.slice(0, 3).map((item, index)=> {
                                    return (
                                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0" key={index}>
                                            <div className="product-item-sm d-flex">
                                                <div className="thumbnail">
                                                    <img src={"http://localhost:3000/uploads/category/" + item?.file}
                                                         alt="Image" className="img-fluid-style"/>
                                                </div>
                                                <div className="pt-2">
                                                    <h3>{item?.name}</h3>
                                                    <p>{item?.name} Free Delivery * At First Purchase Up to 15% discount</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : <h3>Not Found Categories</h3>
                        ): <Loader />
                    }

                </div>
            </div>
        </div>
    )
}

export default HomeCategory