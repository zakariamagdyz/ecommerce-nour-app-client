import { Formik } from "formik";
import * as Yup from "yup";

import {
  Container,
  Wrapper,
  Title,
  Button,
  Form,
  FormLink,
  FormInput,
  Input,
} from "../style/auth.styles.jsx";

//////////////////////////////////////////////

///////////////////////////////////////////////

const Login = () => {
  const initialValues = { name: "", password: "" };

  const onSubmit = (values, { isSubmitting, resetForm }) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required().max(55),
    password: Yup.string().required().min(8).max(55),
  });

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
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
                  placeholder="username"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && errors.name}
              </FormInput>
              <FormInput>
                <Input
                  placeholder="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
              </FormInput>

              <Button type="submit" disabled={isSubmitting}>
                LOGIN
              </Button>

              <FormLink to="/">DO NOT YOU REMEMBER THE PASSWORD? </FormLink>
              <FormLink to="/register">CREATE A NEW ACCOUNT</FormLink>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default Login;
