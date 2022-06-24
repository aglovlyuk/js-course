import { useState } from "react";

import validateInput from "../helpers/validationForm";

const RegistrationForm = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errorMessage, setErrorMessage] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const onChange = (event) => {
        const { name, value } = event.target;

        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onSubmit = (event) => {
        event.preventDefault();

        const formElements = event.target.elements;

        [...formElements].forEach((element) => {
            setErrorMessage((prev) => ({ ...prev, ...validateInput(element) }));
        });

        console.log("Submitted");
    };

    return (
        <form className="reg-form" onSubmit={onSubmit}>
            <h2>Registration</h2>

            <label className="form-control">
                Email:
                <input
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={onChange}
                />
                {errorMessage.email && (
                    <span className="err">{errorMessage.email}</span>
                )}
            </label>

            <label className="form-control">
                Password:
                <input
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={onChange}
                />
                {errorMessage.password && (
                    <span className="err">{errorMessage.password}</span>
                )}
            </label>

            <label className="form-control">
                Confirm password:
                <input
                    type="password"
                    name="confirmPassword"
                    value={input.confirmPassword}
                    onChange={onChange}
                />
                {errorMessage.confirmPassword && (
                    <span className="err">{errorMessage.confirmPassword}</span>
                )}
            </label>

            <button className="btn-primary" type="submit">
                Submit
            </button>
        </form>
    );
};

export default RegistrationForm;
