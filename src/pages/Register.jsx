import styled from "styled-components";
import { Formik } from "formik";
import * as Yup from "yup";
import { FormLink, Container, Title, Wrapper } from "../style/auth.styles.jsx";
//////////////////////////////////////////////

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  min-width: 40%;
  margin: 0.3rem 0;
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
  background: teal;
  cursor: pointer;
  color: white;
  margin-bottom: 2rem;
`;

const FormInput = styled.div`
  display: flex;
  flex: 1;
  align-self: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  color: var(--err-color);
  font-size: 1.3rem;
  margin: 0.5rem;
`;

///////////////////////////////////////////////

const Register = () => {
  const initialValues = {
    name: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };
  const onSubmit = (values, { isSubmitting, resetForm }) => {
    console.log(values);
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required().max(20),
    lastName: Yup.string().required().max(20),
    userName: Yup.string().max(20),
    email: Yup.string().required().email().max(55),
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
      <Wrapper wider>
        <Title>CREATE AN ACCOUNT</Title>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            touched,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormInput>
                <Input
                  placeholder="name"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && errors.name}
              </FormInput>
              <FormInput>
                <Input
                  placeholder="last name"
                  name="lastName"
                  onChange={handleChange}
                  value={values.lastName}
                  onBlur={handleBlur}
                />
                {errors.lastName && touched.lastName && errors.lastName}
              </FormInput>

              <FormInput>
                <Input
                  placeholder="username"
                  name="userName"
                  onChange={handleChange}
                  value={values.userName}
                  onBlur={handleBlur}
                />
                {errors.userName && touched.userName && errors.userName}
              </FormInput>
              <FormInput>
                <Input
                  placeholder="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && errors.email}
              </FormInput>
              <FormInput>
                <Input
                  placeholder="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                />

                {errors.password && touched.password && errors.password}
              </FormInput>

              <FormInput>
                <Input
                  placeholder="confirm password"
                  name="passwordConfirm"
                  type="password"
                  onChange={handleChange}
                  value={values.passwordConfirm}
                  onBlur={handleBlur}
                />
                {errors.passwordConfirm &&
                  touched.passwordConfirm &&
                  errors.passwordConfirm}
              </FormInput>
              <Agreement>
                By creating an account, I consent to the processing of my
                personal data in accordance with the <b>PRIVACY POLICY</b>
              </Agreement>

              <Button type="submit" disabled={isSubmitting}>
                Create
              </Button>
            </Form>
          )}
        </Formik>
        <FormLink to="/login">Have AN ACCOUNT?</FormLink>
      </Wrapper>
    </Container>
  );
};

export default Register;
