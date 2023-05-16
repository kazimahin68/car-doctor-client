import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';
import img from '../../assets/images/login/login.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {

    const {logIn} = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const navigate = useNavigate()

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        logIn(email, password)
        .then(() =>{
            setSuccess('You are successfully logged in');
            form.reset();
            navigate('/')
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className="bg-base-100 mt-12">
            <div className="hero-content flex-col md:flex-row gap-10">
                <div className='w-full md:w-3/4 xl:w-1/2'>
                    <img src={img} className="rounded-lg" />
                </div>
                <div className="card w-full md:w-3/4 xl:w-1/2 shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold pt-10 text-center">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <p className='text-green-600'>{success}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-600 border-none"><input type="submit" value="Sign In" /></button>
                        </div>
                    </form>
                    <div>
                        <p className='text-center mb-5 font-bold'>Or Sing In With</p>
                        <div className='flex justify-center items-center gap-3 mb-5'>
                            <button className='btn btn-outline rounded-full bg-base-200 border-none hover:bg-orange-600 text-[#3B5998]'><FaFacebookF></FaFacebookF></button>
                            <button className='btn btn-outline rounded-full bg-base-200 border-none hover:bg-orange-600 text-[#0A66C2]'><FaLinkedinIn></FaLinkedinIn></button>
                            <button className='btn btn-outline rounded-full bg-base-200 border-none hover:bg-orange-600 text-[#31AA52]'><FaGoogle></FaGoogle></button>
                        </div>
                        <p className='text-center mb-5'>New to this site? <Link to='/register' className='text-orange-600 font-bold'>Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;