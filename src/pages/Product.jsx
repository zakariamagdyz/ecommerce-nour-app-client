import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";

import mediaDevices from "../style/mediaDevices.js";

////////////////////////////

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 5rem;
  display: flex;

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
  height: 90vh;
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0;
  width: 60%;
  @media ${mediaDevices.mobile} {
    width: 100%;
  }
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 2rem;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 0.5rem;
`;
const FilterSize = styled.select`
  margin-left: 1rem;
  padding: 0.5rem;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media ${mediaDevices.mobile} {
    width: 100%;
    flex-direction: column;
  }
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
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

  &:hover {
    background-color: #f8f4f4;
  }
`;

/////////////////////////////////////

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>

        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
          </Desc>
          <Price>$ 20</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
};

export default Product;
