import React, { useEffect } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const MailchimpFormSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(2, 'Nome muito curto!')
        .max(50, 'Nome muito longo!')
        .required('Campo obrigatório'),
    email: Yup
        .string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),
});

interface Props {
    onValidated: Function,
    status: string | null,
    nextPage: string
}

const MailchimpForm = (props: Props) => {

    const { onValidated, status, nextPage } = props;
    const history = useHistory();


    useEffect(() => {
        if (status === "error") console.log('errouuu');
        if (status === "success") {
            history.push(nextPage);
        }
    }, [status, history, nextPage]);

    return (
        <div className='mailchimp-form'>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                }}
                validationSchema={MailchimpFormSchema}
                onSubmit={async (values) => {
                    onValidated({
                        EMAIL: values.email,
                        FNAME: values.name,
                    });
                }}
            >
                {({ errors, touched, isValid, dirty }) => (
                    <Form>
                        <div>
                            <label htmlFor="name">Nome</label>
                            <Field id="name" name="name" />
                            {errors.name && touched.name ? (
                                <div className='error'>{errors.name}</div>
                            ) : null}
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" type="email" className="input-effect" />
                            {errors.email && touched.email ? (
                                <div className='error'>{errors.email}</div>
                            ) : null}
                        </div>
                        {/* <button type="submit" onClick={() => handleClick()}>Feito!</button> */}
                        <button type="submit" disabled={!isValid || !dirty}>Feito!</button>
                    </Form>
                )}
            </Formik>
        </div>

    )
};

export default MailchimpForm;