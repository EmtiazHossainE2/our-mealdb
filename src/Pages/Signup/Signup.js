import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleLogo from "../../images/google.svg";
import { auth } from "../../firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const Signup = () => {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });

    console.log(email);
    console.log(password);

    //google provider handle 
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                console.log(user);
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
        if (passwordValue.length < 7) {
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
        const confirmPasswordValue = event.target.value
        setConfirmPassword(confirmPasswordValue)
    }

    // form handle sign up
    const handleSignup = (event) => {
        event.preventDefault();
        // const emailValue = event.target.email.value
        // const passwordValue = event.target.password.value
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/")
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        console.log("submit");

    }

    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Sign Up</h1>
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
                <div className='input-wrapper'>
                    <button className='google-auth' onClick={handleGoogleSignIn}>
                        <img src={GoogleLogo} alt='' />
                        <p> Continue with Google </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
