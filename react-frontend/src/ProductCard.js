import React, { useState } from "react";
import { Card, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function ProductCard ({ product, handleAddProduct, user }) {
  const [count, setCount] = useState(0);

  function submitOrder(product) {


    console.log(product.id)
    let data = { user_id: user.id, product_id: product.id };

    fetch("http://localhost:9292/create_order", { 
      // credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setCount((count => {
          return  count + 1
       }))
      })
      .catch(error => console.log(error));
    }

  const { id, description, likes } = product;
  const [addLikes, setAddLikes] = useState(likes);

  function handleLikes() {
    // let numbers = likes + 1;
    fetch(`http://localhost:9292/products/${id}`, {
      method: "PATCH",
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes:  product.likes += 1,
      }),
    })
    .then(r=>r.json())
    .then((result)=> console.log("success:", result))
    .catch((error)=> {
      console.error("Error:", error);
    })
    .then(setAddLikes((likes) => likes +1))
  }

  return (
    <div className="product-card">
      <ul className = 'product-ul'>
      <img src={product.image} className = 'card-img'  alt={"product name"} />
      <li style={{ color: 'black', fontWeight: 'bold' }}>{product.name}</li>
      {/* <p>{description}</p> */}
      <p>Price: ${product.price}</p>
      <button className="emoji-button favorite active" onClick={handleLikes}>✨ {addLikes} likes</button>
      {/* <button onClick={() => handleAddProduct(product)} className="addToCart">AddToCart</button> */}
      {user? 
        <Button style={{width:"100%"}}  onClick={() => {handleAddProduct(product) }}>ADDToOrder</Button> :  <Link to="/login">
        
        <Button style={{width:"100%"}}>Please Log In to Add to Cart</Button> 
        </Link>
        

      }
      </ul>
    </div>
  );
}

export default ProductCard ;