import React from 'react'
import {Helmet} from "react-helmet-async"
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
function Add() {
    async function addDataFormik(item) {
        fetch("http://localhost:3100/services/",
      {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      })
      }
    return (
        <>
        <Helmet>
            <title>add</title>
        </Helmet>
        
        <Formik
          initialValues={{ image: '', name: '', title: '' }}
          validationSchema={Yup.object({
            image: Yup.string()
              .required('Required'),
            name: Yup.string()
              .required('Required'),
            title: Yup.string().required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                addDataFormik(values)
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <label htmlFor="name">name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
    
            <label htmlFor="title">title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" />
    
            <label htmlFor="image">image</label>
            <Field name="image" type="text" />
            <ErrorMessage name="image" />
    
            <button type="submit">Submit</button>
          </Form>
        </Formik>
        </>
      );
}

export default Add