import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../assets/data/data.js";
import mediaDevices from "../style/mediaDevices.js";
////////////////////////////////////////

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  @media ${mediaDevices.mobile} {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  background-color: #d4cece;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  left: ${(props) => props.direction === "left" && "1rem"};
  right: ${(props) => props.direction === "right" && "1rem"};
  opacity: 0.5;
  z-index: 1000;

  svg {
    font-size: 1.8rem;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 5rem;
`;

const Title = styled.h1`
  font-size: 7rem;
`;
const Desc = styled.p`
  margin: 5rem 0;
  font-size: 2rem;
  letter-spacing: 0.3rem;
  font-weight: 500;
`;
const Button = styled.button`
  padding: 1rem;
  background: transparent;
  cursor: pointer;
  font-size: 2rem;
`;

////////////////////////////////////////
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((sliderItem) => (
          <Slide key={sliderItem.id} bg={sliderItem.bg}>
            <ImgContainer>
              <Image src={sliderItem.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{sliderItem.title}</Title>
              <Desc>{sliderItem.desc}</Desc>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
