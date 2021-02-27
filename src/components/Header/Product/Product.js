import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
function Product({product,handleAddProduct}) {
    //console.log(handleAddProduct);
    const {name,img,price,seller,stock}=product;
    return (
        <div >
            <div className='product-area'>
                <div className='image-area'>
                    <img src={img} alt=""/>
                </div>
            
                <div className='product-details'>
                    <h3 className='product-title'>{name}</h3>
                    <p><small>By: {seller}</small></p>
                    <h2>${price}</h2>
                    <p>Only {stock} left in Stock - Order Soon</p>
                    <button className='add-cart-button' onClick={()=>handleAddProduct(product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
                </div>
            </div>   
        </div>
    )
}

export default Product