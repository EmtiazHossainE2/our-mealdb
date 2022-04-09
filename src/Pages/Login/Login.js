import "./AuthForm.css";
import GoogleLogo from "../../images/google.svg";
import FacebookLogo from "../../images/facebook.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineExclamationCircle } from "react-icons/ai";



const Login = () => {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });

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


    // handle login 
    const handleLogIn = event => {
        event.preventDefault();
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
                    // console.log(user);
                    toast.success(`Welcome back `, { id: "welcome" });
                    navigate("/");
                })
                .catch((error) => {
                    const errorMessage = error.message;

                    if (errorMessage.includes("wrong-password")) {
                        toast.error("Wrong Password", { id: "error" });
                    } else {
                        toast.error(errorMessage, { id: "error" });
                    }
                });
        }
    }



    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h3>Login</h3>
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
                <form onSubmit={handleLogIn}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper' >
                            <input type='text' onBlur={handleEmail} name='email' id='email' />
                        </div>
                        {email?.error && <p className="error"> <AiOutlineExclamationCircle /> {email.error}</p>}
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper' >
                            <input type='password' onBlur={handlePassword} name='password' id='password' />
                        </div>
                        {password?.error && <p className="error"><AiOutlineExclamationCircle /> {password.error}</p>}

                    </div>
                    <button type='submit' className='auth-form-submit' >
                        Login
                    </button>
                </form>
                <p className='redirect'>
                    New to Britannica ?{" "}
                    <span onClick={() => navigate("/sign-up")}>Create New Account</span>
                </p>
            </div>
        </div>
    );
};

export default Login;
