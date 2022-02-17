import { Formik } from "formik";
import * as Yup from "yup";

import {
  Container,
  Wrapper,
  Title,
  Button,
  Form,
  FormInput,
  FormLink,
  Input,
} from "../style/auth.styles.jsx";

const ForgotPass = () => {
  const initialValues = {
    email: "",
  };

  const onSubmit = (values, { isSubmitting, resetForm }) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    email: Yup.string().required().max(55).email(),
  });

  return (
    <Container>
      <Wrapper>
        <Title>Forgot Your Password?</Title>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleSubmit,
            handleBlur,
            handleChange,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormInput>
                <Input
                  placeholder="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </FormInput>

              <Button type="submit" disabled={isSubmitting}>
                Get Mail
              </Button>

              <FormLink to="/login">REMEMBER PASS?</FormLink>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default ForgotPass;
