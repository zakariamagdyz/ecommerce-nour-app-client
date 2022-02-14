import React from "react";
import styled from "styled-components";
import mediaDevices from "../style/mediaDevices.js";
import { Link } from "react-router-dom";

///////////////////////////////////////////////

const Container = styled.div`
  margin: 0.3rem;
  flex: 1;
  min-width: 48%;
  height: 60vh;
  position: relative;
  flex-wrap: wrap;

  @media ${mediaDevices.mobile} {
    height: 40vh;
    margin-bottom: 2rem;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.3)
  );
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 2rem;
  font-size: 4rem;
  text-transform: uppercase;
`;
const Button = styled(Link)`
  border: none;
  padding: 1rem;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  text-decoration: none;
`;

///////////////////////////////
const CategoryItem = ({ category }) => {
  return (
    <Container>
      <Image
        src={`${process.env.REACT_APP_API_URL_DEV}/categories/${category.photo}`}
      />
      <Info>
        <Title>{category.name}</Title>
        <Button to={`/category/${category._id}`}>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
