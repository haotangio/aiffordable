'use client';
import * as Yup from "yup";
import {Field, Formik, Form} from "formik";
import {Button, Stack, TextField} from "@mui/material";
import {createFirstAdmin} from "@aiffordable/workspace-manager/actions";

const initialValues = {
  systemPassword: '',
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export function SystemSetupForm() {
  const onSubmit = async (values, helpers) => {
    try {
      helpers.setSubmitting(true);
      const user = await createFirstAdmin(
        {
          token: values.systemPassword,
          email: values.email,
          password: values.password,
        }
      );
      helpers.setSubmitting(false);
      alert(`User created: ${user.email}`);
    } catch (e) {
      helpers.setSubmitting(false);
      alert(e.message);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({isSubmitting}) => (
        <Form>
          <Stack direction="column" spacing={2}>
            <Field name="systemPassword" label="System password" component={FormikTextField} />
            <Field
              name="fullName"
              label="Full Name"
              component={FormikTextField}
            />
            <Field
              name="email"
              label="Email"
              type="email"
              component={FormikTextField}
            />
            <Field
              name="password"
              label="Password"
              type="password"
              component={FormikTextField}
            />
            <Field
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              component={FormikTextField}
            />
            <Button disabled={isSubmitting} type="submit" variant="contained">Finish</Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

const validationSchema = Yup.object({
  systemPassword: Yup.string()
    .required('System Password is required'), // You can add more rules here

  fullName: Yup.string()
    .required('Full Name is required'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Please confirm your password'),
});

function FormikTextField({ field, form, ...props }: any) {
  return (
    <TextField
      {...field}
      {...props}
      fullWidth
      error={form.touched[field.name] && Boolean(form.errors[field.name])}
      helperText={form.touched[field.name] && form.errors[field.name]}
    />
  );
}
