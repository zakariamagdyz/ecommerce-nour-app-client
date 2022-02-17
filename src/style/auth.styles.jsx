import styled from "styled-components";
import mediaDevices from "./mediaDevices.js";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: ${(props) => (props.wider ? "40%" : "25%")};
  padding: 2rem;
  background-color: #fff;

  @media ${mediaDevices.tabLand} {
    width: 40%;
  }
  @media ${mediaDevices.tabPort} {
    width: 50%;
  }

  @media ${mediaDevices.mobile} {
    width: ${(props) => (props.wider ? "80%" : "60%")};
  }
`;
export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 300;
  margin-bottom: 3rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  margin: 0.2rem 0;
  padding: 1rem;

  &[type="password"] {
    letter-spacing: 0.3rem;
  }
`;

export const Button = styled.button`
  min-width: 40%;
  border: none;
  padding: 1.5rem 2rem;
  background: teal;
  cursor: pointer;
  color: white;
  margin: 1rem 0.3rem 2rem;
`;

export const FormLink = styled(Link)`
  margin: 0.5rem 0;
  font-size: 1.2rem;
  text-decoration: underline;
  display: block;
  cursor: pointer;
`;

export const FormInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: var(--err-color);
  font-size: 1.3rem;
  margin: 1rem;
`;
