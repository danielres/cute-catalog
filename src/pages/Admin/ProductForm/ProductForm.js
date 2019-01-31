import styled from 'styled-components/macro'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const ImagePreview = styled(({ className, src }) => (
  <div className={className}>
    <img alt="" width="100%" src={src} />
  </div>
))`
  position: relative;

  img {
    min-height: 100px;
  }

  img:before {
    content: ' ';
    display: block;
    position: absolute;
    top: -0px;
    left: 0;
    height: 30px;
    width: 100%;
    background: white;
  }

  img:after {
    content: '\f127';
    display: block;
    font-size: 16px;
    font-style: normal;
    font-family: FontAwesome;
    color: rgb(100, 100, 100);
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    text-align: center;
  }
`
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
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await onSubmit(values)
        setSubmitting(false)
        resetForm()
      }}
      validate={values => {
        let errors = {}
        if (!values.imageSrc) errors.imageSrc = 'Required'
        return errors
      }}
    >
      {({ isSubmitting, resetForm, values, dirty }) => (
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

          <div className="mt-2">
            <ImagePreview src={values.imageSrc} />
          </div>

          <br />

          <div className="row justify-content-between no-gutters">
            <button
              className="btn btn-secondary"
              onClick={() => resetForm()}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>

            <button
              className="btn btn-primary"
              type="submit"
              disabled={!dirty || isSubmitting}
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
