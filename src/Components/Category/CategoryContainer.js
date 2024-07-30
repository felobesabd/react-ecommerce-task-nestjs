import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryCard from './../Category/CategoryCard';
import GetAllCategoryHook from "../../hook/category/getAllCategories";
import Loader from "../Uitily/Loader";
import {Link} from "react-router-dom";

const CategoryContainer = () => {

    const [data, loading] = GetAllCategoryHook();
    console.log(data)

    return (
        <Container >
            <div className="admin-content-text mt-2 ">All Categories</div>
            <Row className='my-2 d-flex justify-content-between'>
                {
                    loading === false ? (
                        data !== null ? (
                            data?.map((item, index)=> {
                                return (
                                    <Link to={`/products/category/${item.id}`} style={{ textDecoration: 'none' }}>
                                        <CategoryCard
                                            title={item.name}
                                            img={"http://localhost:3000/uploads/category/" + item?.file}
                                            background="red" key={index}
                                        />
                                    </Link>
                                )
                            })
                        ) : <h3>Not Found Categories</h3>
                    ): <Loader />
                }
            </Row>
        </Container>
    )
}

export default CategoryContainer;