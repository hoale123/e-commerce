import React from "react";
import ProductCard from "./ProductCard";
// import { Header } from "semantic-ui-react";


function Products( { products, handleAddProduct, user } ) {
  function renderProducts() {
    return products.map((product)=> (
      <ProductCard key={product.id} user={user} product={product} handleAddProduct={handleAddProduct} />
    ));
  }

  return (
    <div className = 'product-container'>
      
      {renderProducts()}
      </div>
  );
}

export default Products;
