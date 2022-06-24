const validateInput = (element) => {
    let { name, value } = element;

    const errors = { [name]: "" };

    switch (name) {
        case "email":
            if (!value) {
                errors[name] = "Please enter email.";
            }
            break;

        case "password":
            if (!value) {
                errors[name] = "Please enter Password.";
            } else if (
                element.confirmPassword &&
                value !== element.confirmPassword
            ) {
                errors["confirmPassword"] =
                    "Password and Confirm Password does not match.";
            }
            break;

        case "confirmPassword":
            if (!value) {
                errors[name] = "Please enter Confirm Password.";
            } else if (element.password && value !== element.password) {
                errors[name] = "Password and Confirm Password does not match.";
            }
            break;

        default:
            break;
    }

    return errors;
};

export default validateInput;
