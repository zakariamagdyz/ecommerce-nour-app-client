import { Formik } from "formik";
import * as Yup from "yup";

import {
  Container,
  Wrapper,
  Title,
  Button,
  Form,
  FormInput,
  Input,
} from "../style/auth.styles.jsx";

const ResetPass = () => {
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    passwordConfirm: "",
  };

  const onSubmit = (values, { isSubmitting, resetForm }) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    currentPassword: Yup.string().required().max(55),
    newPassword: Yup.string().required().min(8).max(55),
    passwordConfirm: Yup.string()
      .required()
      .min(8)
      .max(55)
      .test("passwordConfirm", "Two passwords don't match", function (val) {
        return this.parent.newPassword === val;
      }),
  });

  return (
    <Container>
      <Wrapper>
        <Title>Reset Your Password</Title>
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
                  placeholder="current password"
                  name="currentPassword"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.currentPassword}
                />
                {errors.currentPassword &&
                  touched.currentPassword &&
                  errors.currentPassword}
              </FormInput>

              <FormInput>
                <Input
                  placeholder="new password"
                  name="newPassword"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPassword}
                />
                {errors.newPassword &&
                  touched.newPassword &&
                  errors.newPassword}
              </FormInput>

              <FormInput>
                <Input
                  placeholder="password confirm"
                  name="passwordConfirm"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirm}
                />
                {errors.passwordConfirm &&
                  touched.passwordConfirm &&
                  errors.passwordConfirm}
              </FormInput>

              <Button type="submit" disabled={isSubmitting}>
                Reset Password
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default ResetPass;
