// Render Prop
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Basic = ({ product, onSubmit }) => {
  if (!product) return null

  return (
    <Formik
      initialValues={{
        title: product.title,
        description: product.description,
      }}
      onSubmit={async (values, { setSubmitting }) => {
        await onSubmit(values)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="title">Title</label>
          <Field
            autoComplete="off"
            className="form-control"
            name="title"
            placeholder="Title"
            type="text"
          />
          <ErrorMessage name="title" component="div" />

          <br />

          <label htmlFor="title">Description</label>
          <Field
            className="form-control"
            name="description"
            placeholder="description"
            component="textarea"
          />
          <ErrorMessage name="description" component="div" />

          <br />

          <div>
            <img
              alt="Thumbnail"
              src={`https://placekitten.com/320/240?image=${product.id}`}
              width="100%"
            />
          </div>

          <br />

          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            Save
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default Basic
