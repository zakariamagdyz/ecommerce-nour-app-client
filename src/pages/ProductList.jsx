import styled from "styled-components";

import Products from "../components/Products.jsx";
import mediaDevices from "../style/mediaDevices.js";

//////////////////////////////////////
const Container = styled.div``;

const Title = styled.h1`
  margin: 2rem;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 2rem;

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
  return (
    <Container>
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products: </FilterText>
          <Select>
            <Option selected disabled>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option selected disabled>
              Size
            </Option>
            <Option>Xs</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products: </FilterText>
          <Select>
            <Option value="Newest" selected>
              Newest
            </Option>
            <Option value="Price (asc)">Price (asc)</Option>
            <Option value="Price (desc)">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
    </Container>
  );
};

export default ProductList;
