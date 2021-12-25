import React, { useState } from 'react';
import './Subscription.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const InputField = props => {

    const validateInput = values => {
        if (values.some(f => f === "") || values[0].indexOf("@") === -1) {
            return true
        } else {
            return false
        }
    }

    if (props.type === "submit") {
        return (
            <input
                type='submit'
                value={props.label}
                disabled={validateInput(props.formValues)}
            />
        )
    } else if (props.type === "textarea") {
        return (
            <label>
                {props.label}
                <textarea
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    rows={7}
                    name={props.name}
                />
            </label>
        );
    } else {
        return (
            <label>
                {props.label}
                <input
                    onChange={(e) => props.onChangeHandler(e.target.value)}
                    type={props.type}
                    placeholder={props.placeholder}
                    value={props.value}
                    required={props.isRequired}
                    name={props.name}
                />
            </label>
        );
    }


};


const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [programmingLevel, setProgrammingLevel] = useState('');
    const [study, setStudy] = useState('');
    const [studyYear, setStudyYear] = useState('');
    const [gender, setGender] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            firstName &&
            lastName &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
                FNAME: firstName,
                LNAME: lastName,
                PROGLVL: programmingLevel,
                STUDY: study,
                STUDYYEAR: studyYear,
                GENDER: gender,
                PHONE: phone,
            });
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            {status === "sending" && (
                <div>
                    sending...
                </div>
            )}
            {status === "error" && (
                <div
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            <div>
                <InputField
                    label="First Name"
                    onChangeHandler={setFirstName}
                    type="text"
                    value={firstName}
                    placeholder="Jane"
                    isRequired
                />
                <InputField
                    label="Last Name"
                    onChangeHandler={setLastName}
                    type="text"
                    value={lastName}
                    placeholder="Doe"
                    isRequired
                />
                <InputField
                    label="Nível de conhecimento (Programação)"
                    onChangeHandler={setProgrammingLevel}
                    type="text"
                    value={programmingLevel}
                    placeholder="Nível de conhecimento (Programação)"
                    isRequired
                />
                <InputField
                    label="Grau de Ensino"
                    onChangeHandler={setStudy}
                    type="text"
                    value={study}
                    placeholder="Grau de Ensino"
                    isRequired
                />
                <InputField
                    label="Ano de Formação"
                    onChangeHandler={setStudyYear}
                    type="text"
                    value={studyYear}
                    placeholder="Ano de Formação"
                    isRequired
                />
                <InputField
                    label="Qual genero você se identifica?"
                    onChangeHandler={setGender}
                    type="text"
                    value={gender}
                    placeholder="Qual genero você se identifica?"
                    isRequired
                />
                <InputField
                    label="Whatsapp"
                    onChangeHandler={setPhone}
                    type="text"
                    value={phone}
                    placeholder="Whatsapp"
                    isRequired
                />
                <InputField
                    label="E-mail"
                    onChangeHandler={setEmail}
                    type="text"
                    value={email}
                    placeholder="E-mail"
                    isRequired
                />
            </div>

            <InputField
                label="subscribe"
                type="submit"
                formValues={[email, firstName, lastName]}
            />
        </form>
    )
};

function Subscription() {

    const postUrl = `https://adrianasaty.us20.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <div className="subscription">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    )
}

export default Subscription;