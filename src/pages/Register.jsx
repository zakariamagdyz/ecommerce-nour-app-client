import styled from "styled-components";
import mediaDevices from "../style/mediaDevices.js";

//////////////////////////////////////////////
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 2rem;
  background-color: #fff;
  @media ${mediaDevices.tabLand} {
    width: 40%;
  }
  @media ${mediaDevices.tabPort} {
    width: 50%;
  }

  @media ${mediaDevices.mobile} {
    width: 80%;
  }
`;
const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 2rem 1rem 0 0;
  padding: 1rem;
`;
const Agreement = styled.span`
  font-size: 1.2rem;
  margin: 2rem 0;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 1.5rem 2rem;
  background:teal;
  cursor: pointer;
  color:white;
  '
`;

///////////////////////////////////////////////

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
