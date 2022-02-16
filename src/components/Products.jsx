import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "./Product.jsx";
import axios from "../api-call-config/callConfig.js";
import Spinner from "./Spinner.jsx";
import { useParams } from "react-router-dom";
///////////////////////////////////////////

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  margin-bottom: 8rem;
  margin-top: 2rem;
`;

const NotFound = styled.h2`
  text-align: center;
  width: 100%;
  margin: 4rem;
  padding: 4rem 0;
`;

///////////////////////////////////////////

const Products = ({ productsFilter }) => {
  const [products, setProducts] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let res;
        if (id) {
          const { sort, size, color } = productsFilter;
          res = await axios.get(
            `/categories/${id}/products?sort=${sort}&color=${color}&size=${size}`
          );
        } else {
          res = await axios.get("/products?page=1&limit=8");
        }

        setProducts(res.data.data.products);
      } catch (error) {}
    };

    fetchProducts();
  }, [setProducts, id, productsFilter]);

  return (
    <Container>
      {!products ? (
        <Spinner />
      ) : products.length ? (
        products.map((product) => <Product key={product._id} item={product} />)
      ) : (
        <NotFound>No product found</NotFound>
      )}
    </Container>
  );
};

export default Products;
