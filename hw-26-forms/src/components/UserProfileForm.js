import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
    .object({
        firstname: yup.string().required("This field is required!"),
        lastname: yup.string().required("This field is required!"),
        country: yup.string().ensure().required("This field is required!"),
    })
    .required();

const UserProfileForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form className="user-form" onSubmit={handleSubmit(onSubmit)}>
            <h2>User Profile</h2>

            <label className="form-control">
                First name: <input type="text" {...register("firstname")} />
                {errors.firstname && (
                    <span className="err">{errors.firstname.message}</span>
                )}
            </label>

            <label className="form-control">
                Last name: <input type="text" {...register("lastname")} />
                {errors.lastname && (
                    <span className="err">{errors.lastname.message}</span>
                )}
            </label>

            <label className="form-control">
                Country:
                <select {...register("country")}>
                    <option value=""></option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="England">England</option>
                    <option value="USA">USA</option>
                </select>
                {errors.country && (
                    <span className="err">{errors.country.message}</span>
                )}
            </label>

            <button className="btn-primary" type="submit">
                Submit
            </button>
        </form>
    );
};

export default UserProfileForm;
