import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const LoginSchema = Yup.object().shape({
  login: Yup.string().required("Login is required"),
  password: Yup.string().required("Password is required"),
});