import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import mediaDevices from "../style/mediaDevices.js";
//////////////////////////////////////////////
const Container = styled.div`
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

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1rem 0;
  padding: 1rem;
`;

const Button = styled.button`
  min-width: 40%;
  border: none;
  padding: 1.5rem 2rem;
  background:teal;
  cursor: pointer;
  color:white;
  margin-bottom: 1rem;
  '
`;

const Link = styled.a`
  margin: 0.5rem 0;
  font-size: 1.2rem;
  text-decoration: underline;
  cursor: pointer;
`;

///////////////////////////////////////////////

///////////////////////////////////////////////

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />

          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD? </Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
