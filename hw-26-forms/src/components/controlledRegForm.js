import { useState } from "react";

const ControlledRegForm = () => {
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

    const handleChange = (event) => {
        const { name, value } = event.target;

        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formElements = event.target.elements;

        [...formElements].forEach((element) => {
            validateInput(element);
        });
    };

    const validateInput = (element) => {
        let { name, value } = element;

        setErrorMessage((prev) => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {
                case "email":
                    if (!value) {
                        stateObj[name] = "Please enter email.";
                    }
                    break;

                case "password":
                    if (!value) {
                        stateObj[name] = "Please enter Password.";
                    } else if (
                        input.confirmPassword &&
                        value !== input.confirmPassword
                    ) {
                        stateObj["confirmPassword"] =
                            "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = input.confirmPassword
                            ? ""
                            : errorMessage.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if (!value) {
                        stateObj[name] = "Please enter Confirm Password.";
                    } else if (input.password && value !== input.password) {
                        stateObj[name] =
                            "Password and Confirm Password does not match.";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={input.email}
                    onChange={handleChange}
                />
            </label>
            {errorMessage.email && (
                <span className="err">{errorMessage.email}</span>
            )}

            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={input.password}
                    onChange={handleChange}
                />
            </label>
            {errorMessage.password && (
                <span className="err">{errorMessage.password}</span>
            )}

            <label>
                Confirm password:
                <input
                    type="password"
                    name="confirmPassword"
                    value={input.confirmPassword}
                    onChange={handleChange}
                />
            </label>
            {errorMessage.confirmPassword && (
                <span className="err">{errorMessage.confirmPassword}</span>
            )}

            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledRegForm;
