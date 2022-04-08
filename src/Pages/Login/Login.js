import React, { useState } from "react";
import "./AuthForm.css";
import GoogleLogo from "../../images/google.svg";
import { useNavigate } from "react-router-dom";
import app from "../../firebase.init";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const auth = getAuth(app)

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" })


    //handle email  
    const handleEmail = (e) => {
        // console.log( e.target.value);
        const emailValue = e.target.value
        if (/\S+@\S+\.\S+/.test(emailValue)) {
            setEmail({ value: emailValue, error: "" });
        } else {
            setEmail({ value: "", error: "Please Provide a valid Email" });
        }
    }

    //handle password  
    const handlePassword = e => {
        // console.log(e.target.value);
        const passwordValue = e.target.value
        setPassword({ value: passwordValue, error: "" });
    }

    // handle login 
    const handleLogIn = e => {
        e.preventDefault();

        if (email.value === "") {
            setEmail({ value: "", error: "Email is required" });
        }

        if (password.value === "") {
            setPassword({ value: "", error: "Password is required" });
        }
        if (email.value && password.value) {
            signInWithEmailAndPassword(auth, email.value, password.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/");
                })
                .catch((error) => {
                    const errorMessage = error.message;

                    if (errorMessage.includes("wrong-password")) {
                        console.error("Wrong Password", { id: "error" });
                    } else {
                        console.error(errorMessage, { id: "error" });
                    }
                });
        }


    }

    //google provider handle 
    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
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

    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Login</h1>
                <form onSubmit={handleLogIn}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper' onBlur={handleEmail}>
                            <input type='text' name='email' id='email' />
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper' onBlur={handlePassword}>
                            <input type='password' name='password' id='password' />
                        </div>
                    </div>
                    <button type='submit' className='auth-form-submit' >
                        Login
                    </button>
                </form>
                <p className='redirect'>
                    New to Britannica ?{" "}
                    <span onClick={() => navigate("/sign-up")}>Create New Account</span>
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

export default Login;
