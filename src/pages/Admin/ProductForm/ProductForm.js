import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Basic = ({ product, onSubmit }) => {
  if (!product) return null

  return (
    <Formik
      enableReinitialize
      initialValues={{
        title: product.title,
        description: product.description,
        imageSrc: product.imageSrc,
      }}
      onSubmit={async (values, { setSubmitting }) => {
        await onSubmit(values)
        setSubmitting(false)
      }}
      validate={values => {
        let errors = {}
        if (!values.imageSrc) errors.imageSrc = 'Required'
        return errors
      }}
    >
      {({ isSubmitting, resetForm }) => (
        <Form>
          <label htmlFor="title">Title</label>
          <Field
            autoComplete="off"
            className="form-control"
            name="title"
            placeholder="Title"
            type="text"
          />
          <ErrorMessage className="text-danger" component="div" name="title" />

          <br />

          <label htmlFor="title">Description</label>
          <Field
            className="form-control"
            name="description"
            placeholder="description"
            component="textarea"
          />
          <ErrorMessage
            className="text-danger"
            component="div"
            name="description"
          />

          <br />

          <label htmlFor="imageSrc">Image src</label>
          <Field
            autoComplete="off"
            className="form-control"
            name="imageSrc"
            placeholder="Image src"
            type="text"
          />
          <ErrorMessage
            className="text-danger"
            component="div"
            name="imageSrc"
          />
          <div>
            <img
              className="mt-2"
              alt="Thumbnail"
              src={product.imageSrc}
              width="100%"
            />
          </div>

          <br />

          <div className="row justify-content-between no-gutters">
            <button
              className="btn btn-secondary"
              onClick={() => resetForm()}
              disabled={isSubmitting}
            >
              Reset
            </button>

            <button
              className="btn btn-primary"
              type="submit"
              disabled={isSubmitting}
            >
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Basic
