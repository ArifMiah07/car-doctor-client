import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { FaFacebook, FaLinkedin} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import axios from 'axios';
// import { useContext } from 'react';
// import { AuthContext } from '../../Contexts/AuthProvider';




const LogIn = () => {


    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)
        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                
                //get access token

                const user = { email };

                axios.post('http://localhost:5000/jwt', user, {withCredentials: true})

                .then(res => {
                    console.log(res.data);
                    if(res.data.success){
                        navigate(location?.state ? location?.state : '/', {})
                    }
                })

            })
            .catch(error => console.log(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  lg:flex-row">
                <div className="text-center lg:text-left lg:w-1/2">
                    <img src={login} alt="" />
                </div>
                <div className="card shrink-0 w-full lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold text-[#444444] text-center ">Login</h1>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Conform Password</span>
                        </label>
                        <input name='password' type="text" placeholder="conform password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value={'Login'} />
                        </div>
                        <div className='flex flex-col items-center gap-6'>
                            <h1>Or Sign In with</h1>
                            <div className='flex gap-6'>
                                <p className='btn btn-circle'><FcGoogle /> </p>
                                <p className='btn btn-circle'><FaFacebook /></p>
                                <p className='btn btn-circle'><FaLinkedin /></p>
                            </div>
                        </div>
                    </form> 
                    <div>
                        <p className='text-center'>Do not Have an account? <Link to={'/sign-up'} className='text-orange-400 '>Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;