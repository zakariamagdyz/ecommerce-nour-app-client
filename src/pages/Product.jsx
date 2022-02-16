import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner.jsx";

import mediaDevices from "../style/mediaDevices.js";
import { useParams } from "react-router-dom";
import axios from "../api-call-config/callConfig.js";
import ProductFilters from "../components/ProductFilters.jsx";
import { useOrderData } from "../context/order.js";
import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Footer from "../components/Footer.jsx";
import Newsletter from "../components/Newsletter.jsx";

////////////////////////////

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 5rem;
  margin-top: 12rem;

  display: flex;

  @media ${mediaDevices.tabPort} {
    padding: 1rem;
  }

  @media ${mediaDevices.mobile} {
    flex-direction: column;
    gap: 2rem;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;

  @media ${mediaDevices.mobile} {
    height: 60vh;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 5rem;
  @media ${mediaDevices.mobile} {
    padding: 0 1rem;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 2rem 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 4rem;
`;

const AddContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  margin-top: 3rem;
  @media ${mediaDevices.mobile} {
    width: 100%;
  }
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: flex;
  align-self: flex-start;
  gap: 2rem;
  font-weight: 700;
  justify-content: space-between;
  @media ${mediaDevices.mobile} {
    margin-bottom: 3rem;
    font-size: 2rem;
  }

  svg {
    font-size: 2rem;
  }
`;
const Amount = styled.span`
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
`;

const Button = styled.button`
  padding: 1.5rem;
  border: 2px solid teal;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  width: 100%;
  margin-top: 2rem;

  &:hover {
    background-color: #f8f4f4;
  }

  @media ${mediaDevices.mobile} {
    width: 70%;
  }
`;

/////////////////////////////////////

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { quantity, setSize, handleQuantity } = useOrderData();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`/products/${id}`);
        const product = res.data.data.product;
        setProduct(product);
        setSize(product.info[0].size);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [setProduct, setSize, id]);

  return (
    <Container>
      <Navbar />
      <Announcement />
      {!product ? (
        <Spinner />
      ) : (
        <Wrapper>
          <ImgContainer>
            <Image src={product.img} />
          </ImgContainer>

          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>$ {product.price}</Price>

            <ProductFilters product={product} />

            <AddContainer>
              <AmountContainer>
                <Remove
                  onClick={() => {
                    handleQuantity("-");
                  }}
                />
                <Amount>{quantity}</Amount>
                <Add
                  onClick={() => {
                    handleQuantity("+");
                  }}
                />
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      )}

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
