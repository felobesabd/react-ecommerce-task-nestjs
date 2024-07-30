import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import WishlistAddDeleteHook from "../../hook/wishlist/wishlist-add-delete-hook";

const ProductCard = ({img, product, wishlist}) => {

    const [imageFav, handleIsFav] = WishlistAddDeleteHook(product, wishlist);

    return (
        <div className="col-lg-4 col-sm-4">
            <div className="box_main">
                <h4 className="shirt_text">{product?.name}</h4>
                <p className="price_text">Price <span style={{color: "#262626"}}>$ {product?.price}</span>
                </p>
                <div className="tshirt_img">
                    <img src={img} />
                </div>
                <div className="btn_main">
                    <div className="wishlist-div-img">
                        <button type="button" className="wishlist-button-img" onClick={handleIsFav}>
                            <img src={imageFav} width="30px" height="30px" className="wishlist-img"/>
                        </button>
                    </div>
                    <Link to={`/products/${product?.id}`} style={{ textDecoration: 'none' }}>
                        <div className="seemore_bt">
                            <a href="#">See Details</a>
                        </div>
                    </Link>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ProductCard;