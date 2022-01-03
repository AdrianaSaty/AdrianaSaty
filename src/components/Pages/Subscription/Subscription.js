import React, { useEffect } from 'react';
import './Subscription.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import avatar from '../../../img/avatar.png';
import { useHistory } from "react-router-dom";

const SubscriptionSchema = Yup.object().shape({
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

const SubscriptionForm = ({ onValidated, status }) => {
    let history = useHistory();

    useEffect(() => {
        if (status === "error") console.log('errouuu');
        if (status === "success") {
            history.push("/subscriptionSuccess");
        };
    }, [status])

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
            }}
            validationSchema={SubscriptionSchema}
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

    )
};

function Subscription() {
    const postUrl = `https://adrianasaty.us20.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <div className="subscription">
            <div className="container">
                <MailchimpSubscribe
                    url={postUrl}
                    render={({ subscribe, status, message }) => (
                        <div>
                            {
                                <div>
                                    <header className='header-form'>
                                        <figure>
                                            <img className="img-avatar" src={avatar} alt="Foto de Adriana Saty sorrindo com fundo preto" />
                                        </figure>
                                        <div className='header-txt'>
                                            <h3>Complete o cadastro abaixo para receber as novidades em primeira mão! :)</h3>
                                        </div>
                                    </header>
                                    <SubscriptionForm
                                        onValidated={formData => subscribe(formData)}
                                        status={status}
                                    />
                                    {status === "error" && <p className='subscribe-message error'>E-mail já cadastrado!</p>}
                                    {status === "sending" && <p className='subscribe-message'>Loading...</p>}
                                </div>
                            }
                        </div>
                    )}
                />
            </div>
        </div>
    )
}

export default Subscription;