import "./AuthForm.css";
import GoogleLogo from "../../images/google.svg";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase.init";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";



const Login = () => {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

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

    //handle email  


    //handle password  


    // handle login 
    const handleLogIn = event => {
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate("/")
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }



    return (
        <div className='auth-form-container '>
            <div className='auth-form'>
                <h1>Login</h1>
                <form onSubmit={handleLogIn}>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <div className='input-wrapper' >
                            <input type='text' name='email' id='email' />
                        </div>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-wrapper' >
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
