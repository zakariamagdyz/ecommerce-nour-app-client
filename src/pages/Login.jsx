import { Formik } from "formik";
import * as Yup from "yup";
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
import { signIn } from "../redux/user/actions.js";
import { useEffect } from "react";
import FormInput from "../components/FormInput.jsx";

//////////////////////////////////////////////
///////////////////////////////////////////////

const Login = ({ error, signIn, resetMetaData }) => {
  useEffect(() => {
    return () => {
      resetMetaData();
    };
  }, [resetMetaData]);

  const initialValues = { email: "", password: "" };

  const onSubmit = async (values, { isSubmitting, resetForm }) => {
    await signIn(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string().required().max(55).email(),
    password: Yup.string().required().min(8).max(55),
  });

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        {error && <ApiMessage error>{error}</ApiMessage>}

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <FormInput name="email" label="Email" />
              <FormInput name="password" type="password" label="Password" />
              <Button type="submit" disabled={isSubmitting}>
                LOGIN
              </Button>
              <FormLink to="/forgot-password">
                DO NOT YOU REMEMBER THE PASSWORD?
              </FormLink>
              <FormLink to="/register">CREATE A NEW ACCOUNT</FormLink>
            </StyledForm>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

//////////////////////////////////////////////
///////////////////////////////////////////////
const mapStateToProps = (state) => ({
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (body) => dispatch(signIn(body)),
  resetMetaData: () => dispatch(resetMetaData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
