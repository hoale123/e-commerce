import React, { useState } from "react";
import StripeCheckout from 'react-stripe-checkout'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

function CartContainer({ shoppingCart, handleAddProduct, handleRemoveProduct,products }) {

    const itemPrice = shoppingCart.reduce((a,c) => a + c.price * c.qty, 0)
    const taxPrice =itemPrice * 0.07;
    const discountPrice = itemPrice > 200 ? itemPrice * 0.10 : 0;
    const totalPrice = itemPrice + taxPrice - discountPrice
    const [product] = React.useState({
      name: "hoa",
      price: 2000,
    })
   async function handleToken(token,addresses){
     const response = await axios.post('https://f853e7.sse.codesandbox.io/checkout',{
        token,
        product

      });
      const {status} = response.data
      if (status === 'success'){
        toast('Success! check emails for details', 
        {type: 'success'})
      }else {
        toast('Something went wrong', 
        {type: 'error'})
      }
    }

    return(
        <aside className="block col-1">
        <h2>My Shopping Cart</h2>
        <div >
          {shoppingCart.length === 0 && <h3>Cart is Empty</h3>}
        </div>
        {shoppingCart.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <img className="img" alt={"mala"} src={item.image} />
            <div className="col-2">
              <button onClick={() => handleRemoveProduct(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => handleAddProduct(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
              </div>
                  ))}

            {shoppingCart.length !== 0 && (
              <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Item Price</div>
                <div className="col-1 text-right">${itemPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Tax Price</div>
                <div className="col-1 text-right">${taxPrice.toFixed(2)}</div>
              </div>
              <div className="row">
                <div className="col-2">Discount Price</div>
                <div className="col-1 text-right">${discountPrice.toFixed(2)}</div>
              </div>              <hr></hr>
              <div className="row">
                <div className="col-2"><strong>Total Price</strong></div>
                <div className="col-1 text-right"><strong>${totalPrice.toFixed(2)}</strong></div>
              </div>
                <div className="stripe"><strong> 
                  <StripeCheckout
                  stripeKey="pk_test_60dUREduu8N56fFZW7SeskbK"
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  amount={totalPrice.toFixed(2) * 100}
                  name={shoppingCart.map(item => item.name)}
              />
                 <ToastContainer />
              </strong></div>
              </>
            ) }
      </aside>
    )
}

export default CartContainer;