import { Form, Formik } from 'formik'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
        <>
            {/* <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={({ setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {() => (
          <Form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                className="form-control"
              />
            </div>
          </Form>
        )}
      </Formik> */}
        </>
    )
}

export default Home
