import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FormikForm = () => {

    return (
        <>
            <h2>Formik form practice</h2>
            <Formik initialValues={{
                name: 'Pepito',
                email: 'pepito@gmail.com'
            }}
                validate={(values) => {
                    let errors = {};

                    if (!values.name) {
                        errors.name = 'Please enter an person name';
                    }

                    if (!values.email) {
                        errors.email = 'Please enter an email address';
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                        errors.email = 'Enter a valid email address';
                    }

                    return errors;
                }}
                onSubmit={() => {
                    console.log('Fomulario enviado')
                }}
            >
                {({ values, errors }) => (
                    <Form className='formikForm'>
                        <div>
                            <label htmlFor='name' className='form-label'>Name</label>
                            <Field type="text" className="form-control" id="name" name='name' value={values.name} />
                            <ErrorMessage name='name' component={() => (<div className='error'>{errors.name}</div>)} />
                        </div>
                        <div>
                            <label htmlFor='email' className='form-label'>Email</label>
                            <Field type="email" className="form-control" id="email" name='email' value={values.email} />
                            <ErrorMessage name='email' component={() => (<div className='error'>{errors.email}</div>)} />
                        </div>
                        <button type='submit'>Send</button>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default FormikForm;