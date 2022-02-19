import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";

import {
  Container,
  Wrapper,
  Title,
  Button,
  ApiMessage,
  FormLink,
  StyledForm,
} from "../style/auth.styles.jsx";

import { connect } from "react-redux";
import { resetMetaData } from "../redux/user/slice.js";
import { resetPass } from "../redux/user/actions.js";
import { useParams } from "react-router-dom";
import FormInput from "../components/FormInput.jsx";

/////////////////////////////
const ResetPass = ({ error, resetMetaData, resetPass }) => {
  // Get reset token
  const { token } = useParams();
  // Clear Error & success message
  useEffect(() => {
    return () => {
      resetMetaData();
    };
  }, [resetMetaData]);

  const initialValues = {
    password: "",
    passwordConfirm: "",
  };
  const onSubmit = async (values, { isSubmitting, resetForm }) => {
    await resetPass({ token, data: values }).unwrap().then;
  };
  const validationSchema = Yup.object({
    password: Yup.string().required().min(8).max(55),
    passwordConfirm: Yup.string()
      .required()
      .min(8)
      .max(55)
      .test("passwordConfirm", "Two passwords don't match", function (val) {
        return this.parent.password === val;
      }),
  });

  return (
    <Container>
      <Wrapper>
        <Title>Reset Your Password</Title>
        {error && <ApiMessage error>{error}</ApiMessage>}

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <StyledForm>
              <FormInput name="password" type="password" label="Password" />
              <FormInput
                name="passwordConfirm"
                type="password"
                label="Repeat Password"
              />

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Loading..." : "Reset Password"}
              </Button>
              <FormLink to="/forgot-password">Forgot Pass?</FormLink>
            </StyledForm>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  error: state.user.error,
});

const mapDispatchToProps = (dispatch) => ({
  resetPass: (body) => dispatch(resetPass(body)),
  resetMetaData: () => dispatch(resetMetaData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPass);
