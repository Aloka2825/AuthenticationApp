import toast from 'react-hot-toast'



//Validate User Loginpage
export async function userNameValidate(values) {
    const errors = userNameVerify({}, values);

    return errors;
}
//Validate Username
function userNameVerify(error = {}, values) {
    if(!values.username) {
        error.username = toast.error("Username Required...!");
    }
    else if(values.username.includes(" ")) {
        error.username = toast.error("Invalid Username...!");
    }

    return error;
}
//Validate Password
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values);

    return errors;
}

//Verify Username
function passwordVerify(error = {}, values) {

const specialCharacters = /[!”#$%&’()*+,-./:;<=>?@[\]^_`{|}~]/;

    if(!values.password) {
        error.password = toast.error("Password Required...!");
    }
    else if(values.password.includes(" ")) {
        error.password = toast.error("Wrong Password...!");
    }
    else if(values.password.length < 6) {
        error.password = toast.error("Password must be atleast 6 characters...!");
    }
    else if(!specialCharacters.test(values.password)) {
        error.password = toast.error("Password must contain atleast one special character...!");
    }
    
    return error;
}


//Validate Reset Password

export async function resetPasswordValidate(values) {
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_password) {
        errors.exist = toast.error("Password doesn't match...!")
    }

    return errors;
}



//Validate Priofile Page

export async function profileValidate(values) {
    const errors = emailVerify({}, values);

    return errors;
}





