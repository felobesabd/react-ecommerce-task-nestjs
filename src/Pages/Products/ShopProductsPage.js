import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategoryHeader from '../../Components/Category/CategoryHeader';
import ProductsCardContainer from '../../Components/Products/ProductsCardContainer';
import Pagination from '../../Components/Uitily/Pagination';
import SearchCountResult from '../../Components/Uitily/SearchCountResult';
import SideFilter from '../../Components/Uitily/SideFilter';

const ShopProductsPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />
            <Container>
                <SearchCountResult title="100 Result" />
                <Row className='d-flex flex-row'>
                    <Col sm="2" xs="2" md="1" className='d-flex'>
                        <SideFilter />
                    </Col>
                    <Col sm="10" xs="10" md="11">
                        <ProductsCardContainer title="" btntitle="" />
                    </Col>
                </Row>
                <Pagination />
            </Container>
        </div>
    )
}

export default ShopProductsPage