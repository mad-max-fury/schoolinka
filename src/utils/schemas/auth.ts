import * as yup from "yup"

const emailRegex:RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

const Auth = {
auhSignupSchema :yup.object().shape({
  full_name: yup .string()
    .required("fullname is required")
    .test("fullname", "Invalid username", function (value) {
      // validate username
      return (
        value.length >= 3 ||
        this.createError({
          message: "fullaname must be at least 3 characters long",
        })
      );
    }),
  email: yup
    .string()
    .required("Email is required")
    .test("Email", "Invalid email", function (value) {
      // If the value contains "@", validate it as an email address
      return (
        emailRegex.test(value) ||
        this.createError({ message: "Invalid email format" })
      );
    }),
    password: yup
    .string()
    .min(6, "Password must be at least 6 characters long"),
}),
auhSigninSchema :yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .test("Email", "Invalid email", function (value) {
      // If the value contains "@", validate it as an email address
      return (
        emailRegex.test(value) ||
        this.createError({ message: "Invalid email format" })
      );
    }),
    password: yup
    .string()
    .min(6, "Password must be at least 6 characters long"),
})
}

export default Auth;