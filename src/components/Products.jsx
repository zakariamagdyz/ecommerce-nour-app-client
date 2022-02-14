import React from "react";
import styled from "styled-components";
import { popularProducts } from "../assets/data/data.js";
import Product from "./Product.jsx";
///////////////////////////////////////////

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
`;

///////////////////////////////////////////

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <Product key={product.id} item={product} />
      ))}
    </Container>
  );
};

export default Products;
