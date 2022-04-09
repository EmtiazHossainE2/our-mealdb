import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../images/google.svg";
import FacebookLogo from "../../images/facebook.png";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Signup = () => {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });

    // console.log(email);
    // console.log(password);
    // console.log(confirmPassword);

    //google provider handle 
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                toast.success(`Welcome `, { id: "welcome" });
                navigate("/restaurant")
            })
            .catch(error => {
                console.log(error);
            })
        console.log('clicked');
    }

    // handle email 
    const handleEmail = event => {
        const emailValue = event.target.value
        if (/\S+@\S+\.\S+/.test(emailValue)) {
            setEmail({ value: emailValue, error: "" });
        } else {
            setEmail({ value: "", error: "Please Provide a valid Email" });
        }
    }

    //handle password 
    const handlePassword = event => {
        const passwordValue = event.target.value
        if (passwordValue.length < 6) {
            setPassword({ value: "", error: "Password too short" });
        }
        else if (!/(?=.*[A-Z])/.test(passwordValue)) {
            setPassword({
                value: "",
                error: "Password must contain a capital letter",
            });
        }
        else {
            setPassword({ value: passwordValue, error: "" });
        }
    }

    //handle confirm password 
    const handleConfirmPassword = event => {
        const confirmValue = event.target.value
        if (confirmValue !== password.value) {
            setConfirmPassword({ value: "", error: "Password Not Match" });
        } else {
            setConfirmPassword({ value: confirmValue, error: "" });
        }
    }

    // form handle sign up
    const handleSignup = (event) => {
        event.preventDefault();

        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }
        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
        }
        if (confirmPassword.value === "") {
            setConfirmPassword({
                value: "", error: "Password confirmation is required",
            });
        }


        if (email.value && password.value && confirmPassword.value === password.value) {
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/")
                    toast.success("welcome to Britannica", { id: "success" });
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    if (errorMessage.includes("already-in-use")) {
                        toast.error("Email already in use", { id: "error" });
                    } else {
                        toast.error(errorMessage, { id: "error" });
                    }
                });
        }

    }

    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h3>Sign Up</h3>
                <form onSubmit={handleSignup}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper'>
                            <input
                                type='email'
                                onBlur={handleEmail}
                                name='email'
                                id='email' />
                        </div>
                        {email?.error && <p className="error"><AiOutlineExclamationCircle /> {email.error}</p>}
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper'>
                            <input
                                type='password'
                                onBlur={handlePassword}
                                name='password'
                                id='password' />
                        </div>
                        {password?.error && <p className="error"><AiOutlineExclamationCircle /> {password.error}</p>}
                    </div>
                    <div className='input-field'>
                        <label htmlFor='confirm-password'>Confirm Password</label>
                        <div className='input-wrapper'>
                            <input
                                onBlur={handleConfirmPassword}
                                type='password'
                                name='confirmPassword'
                                id='confirm-password'
                            />
                        </div>
                        {confirmPassword?.error && <p className="error"><AiOutlineExclamationCircle /> {confirmPassword.error}</p>}
                    </div>
                    <button type='submit' className='auth-form-submit'>
                        Sign Up
                    </button>
                </form>
                <p className='redirect'>
                    Already have an account?{" "}
                    <span onClick={() => navigate("/log-in")}>Login</span>
                </p>
                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p>or</p>
                    <div className='line-right' />
                </div>
                <div className="third-party">
                    <div className='input-wrapper'>
                        <button className='google-auth' onClick={handleGoogleSignIn}>
                            <img style={{ width: '30px', height: '30px' }} src={GoogleLogo} alt='' />
                            <p> Continue with Google </p>
                        </button>
                    </div>
                    <div className='input-wrapper'>
                        <button className='google-auth' onClick={handleGoogleSignIn}>
                            <img style={{ width: '30px', height: '30px' }} src={FacebookLogo} alt='' />
                            <p> Continue with Facebook </p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
