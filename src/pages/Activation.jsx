import React from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { activateAccount } from "../redux/user/actions.js";
import { resetMetaData } from "../redux/user/slice.js";
import Spinner from "../components/Spinner.jsx";

///////////////////////////////////////////

const Container = styled.div``;

const Content = styled.div`
  min-height: 60vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  padding: 8rem;
`;

const Message = styled.h2`
  text-align: center;
  padding-top: 3rem;
  font-size: 3rem;
  color: ${(props) =>
    props.error ? "var(--err-color)" : "var(--success-color);"};
`;

///////////////////////////////////////////

const Activation = ({
  activateAccount,
  activationMsg,
  errorMsg,
  isLoading,
  resetMetaData,
}) => {
  const { activation } = useParams();
  const navigate = useNavigate();
  const redirectTime = 2500;

  useEffect(() => {
    activateAccount(activation)
      .unwrap()
      .then(() => {
        setTimeout(() => {
          navigate("/", { replace: true });
        }, redirectTime);
      })
      .catch(() =>
        setTimeout(() => {
          navigate("/register", { replace: true });
        }, redirectTime)
      );

    return () => {
      resetMetaData();
    };
  }, [activateAccount, activation, navigate, resetMetaData]);

  return (
    <Container>
      <Navbar />
      <Content>
        {isLoading && <Spinner />}
        {activationMsg && <Message>{activationMsg}</Message>}
        {errorMsg && <Message error> {errorMsg}</Message>}
      </Content>
      <Footer />
    </Container>
  );
};

const mapStateToProps = (state) => ({
  activationMsg: state.user.successMsg,
  errorMsg: state.user.error,
  isLoading: state.user.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  activateAccount: (body) => dispatch(activateAccount(body)),
  resetMetaData: () => dispatch(resetMetaData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Activation);
