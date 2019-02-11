import React from 'react'
import { Formik, Form } from 'formik'

import FormRow from 'shared/Forms/Row'

const EmailNamePasswordForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
        password2: '',
      }}
      onSubmit={onSubmit}
      validate={values => {
        let errors = {}
        if (!values.email) errors.email = 'Required'
        if (!values.name) errors.name = 'Required'
        if (!values.password) errors.password = 'Required'
        if (!values.password2) errors.password2 = 'Required'
        if (values.password.length < 8)
          errors.password = 'Password shoud be at least 8 characters'
        if (values.password !== values.password2)
          errors.password2 = 'Does not match you password'
        return errors
      }}
    >
      {() => (
        <Form>
          <FormRow autoComplete={false} label={null} name="email" />
          <FormRow autoComplete={false} label={null} name="name" />

          <FormRow name="password" label={null} type="password" />

          <FormRow
            label={null}
            name="password2"
            placeholder="Repeat password"
            type="password"
          />

          <div className="row justify-content-between no-gutters">
            <button className="btn btn-primary btn-block" type="submit">
              Register with email + password
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default EmailNamePasswordForm
