export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i.test(values.email)
  ) {
    errors.email = "Email is invalid";
  }

  //   password

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Should contain atleast 8 characters";
  } else if (values.password.search[/a-z/i] < 1) {
    errors.password = "Contains atleast one lowercase";
  } else if (values.password.search[/A-Z/i] < 1) {
    errors.password = "Contains atleast one uppercase";
  } else if (values.password.search[/0-9/] < 1) {
    errors.password = "Contains atleast one number.";
  }

  //   confirm password
  if (!values.cpassword) {
    errors.cpassword = "Confirm the Password";
  } else if (values.cpassword !== values.password) {
    errors.cpassword = "Password do not match";
  }

  if (!values.address) {
    errors.address = "Address required";
  }

  if (!values.mobile) {
    errors.mobile = "Mobile Number required";
  }

  if (!values.social) {
    errors.social = "Social Links required";
  }

  return errors;
}
