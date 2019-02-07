import { Field, ErrorMessage } from 'formik'
import React from 'react'

const upperFirst = lower => lower.replace(/^\w/, c => c.toUpperCase())

const FormRow = ({
  autoComplete = true,
  component = 'input',
  label: l,
  name,
  placeholder: p,
}) => {
  const Label = l ? l : upperFirst(name)
  const placeholder = p ? p : upperFirst(name)

  return (
    <div className="mb-3">
      <label htmlFor={name}>{Label}</label>
      <Field
        autoComplete={autoComplete ? 'on' : 'off'}
        className="form-control"
        component={component}
        name={name}
        placeholder={placeholder}
      />
      <ErrorMessage className="text-danger" component="div" name={name} />
    </div>
  )
}

export default FormRow
