import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import {
  Container,
  Wrapper,
  Title,
  Button,
  StyledForm,
  FormLink,
  ApiMessage,
} from "../style/auth.styles.jsx";

import { connect } from "react-redux";
import { resetMetaData } from "../redux/user/slice.js";
import { forgotPass } from "../redux/user/actions.js";
import FormInput from "../components/FormInput.jsx";

//////////////////////////////////////////////

const ForgotPass = ({ successMsg, error, forgotPass, resetMetaData }) => {
  useEffect(() => {
    return () => {
      resetMetaData();
    };
  }, [resetMetaData]);

  const initialValues = {
    email: "",
  };

  const onSubmit = async (values, { isSubmitting, resetForm }) => {
    await forgotPass(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string().required().max(55).email(),
  });

  return (
    <Container>
      <Wrapper>
        <Title>Forgot Your Password?</Title>
        {successMsg && <ApiMessage>{successMsg}</ApiMessage>}
        {error && <ApiMessage error>{error}</ApiMessage>}
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <FormInput name="email" label="Email Address" type="email" />

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Send Mail"}
              </Button>

              <FormLink to="/login">REMEMBER PASS?</FormLink>
            </StyledForm>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  error: state.user.error,
  successMsg: state.user.successMsg,
});

const mapDispatchToProps = (dispatch) => ({
  forgotPass: (body) => dispatch(forgotPass(body)),
  resetMetaData: () => dispatch(resetMetaData()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPass);
