import React from 'react';

function Cart({cart}) {
    console.log(cart);
    const totalPrice=(cart.reduce((total,prd)=>total+prd.price,0))
    const totalShipping=(cart.reduce((total,prd)=>total+prd.shipping,0))
    const total=(totalPrice+totalShipping)
    const tax=(total*.10)
    const orderTotal=total+tax
    const formatNumber=number=>{
        const newNumber=number.toFixed(2)
        return +newNumber

    }
    return (
        <div>
            <h1>Order Summery</h1>
            <h5>Items Ordered:{cart.length}</h5>
            <br/>
            <h6>Items Price: {formatNumber(totalPrice)}</h6>
            <h6>Shipping & Handling:{formatNumber(totalShipping)}</h6>
            <h6>Total:{formatNumber(total)}</h6>
            <h6>Tax:{formatNumber(tax)}</h6>
            <h3>Order Total:{formatNumber(orderTotal)}</h3>
        </div>
    )
}

export default Cart
