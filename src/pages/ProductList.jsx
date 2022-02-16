import styled from "styled-components";
import { useState } from "react";
import Products from "../components/Products.jsx";
import mediaDevices from "../style/mediaDevices.js";
import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Footer from "../components/Footer.jsx";
import { useLocation } from "react-router-dom";
import Newsletter from "../components/Newsletter.jsx";
//////////////////////////////////////
const Container = styled.div``;

const Title = styled.h1`
  margin: 8rem 0 3rem 0;
  padding: 1rem;
  text-transform: capitalize;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 2rem;

  @media ${mediaDevices.tabPort} {
    margin: 1rem;
  }

  @media ${mediaDevices.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const FilterText = styled.span`
  font-size: 2rem;
  font-weight: bold;
  margin-right: 2rem;
`;

const Select = styled.select`
  padding: 1rem;
  margin-right: 2rem;
  @media ${mediaDevices.mobile} {
    margin-bottom: 1rem;
  }
`;

const Option = styled.option``;

/////////////////////////////////////

const ProductList = () => {
  const [filter, setFilter] = useState({
    sort: "-createdAt",
    size: "",
    color: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const { search } = useLocation();

  ////////////

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{search.slice(1)}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select value={filter.color} onChange={onChange} name="color">
            <Option value="">Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select onChange={onChange} name="size" value={filter.size}>
            <Option value="">Size</Option>
            <Option>Xs</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select name="sort" value={filter.sort} onChange={onChange}>
            <Option value="-createdAt">Newest</Option>
            <Option value="price">Price (asc)</Option>
            <Option value="-price">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products productsFilter={filter} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
