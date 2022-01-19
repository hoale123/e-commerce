// import 'semantic-ui-css/semantic.min.css'
import { Menu } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Aside({ productsData }) {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/categories")
      .then((r) => r.json())
      .then((data) => {
        setCategoryData(data);
      });
  }, []);

  return (
    <Menu vertical floated style={{ marginTop: "70px" }}>
      {categoryData.map((category) => (
        <div key={Math.random()}>
        <Menu.Item key={Math.random()}>
          <Menu.Header>{category.name}</Menu.Header>
          <Menu.Menu>
            {productsData
              .filter((product) => product.category_id === category.id)
              .map((product) => (
                <Menu.Item key={Math.random()}>
                  <NavLink
                    exact
                    to={`/products/${product.id}`}
                    style={{ color: "grey" }}
                    activeStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    {product.name}
                  </NavLink>
                </Menu.Item>
              ))}
          </Menu.Menu>
        </Menu.Item>
        </div>
      ))}
    </Menu>

  );
}

export default Aside;
