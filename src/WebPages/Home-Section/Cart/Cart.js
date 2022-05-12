import React from 'react';


const Cart = ({myCart}) => {
 
   

    return (
        <div>
             <h2>Order Summery</h2>
            <h1>Ordered: {myCart.length}</h1>
           <img src={myCart.image} alt="" />

        </div>
    );
};

export default Cart;