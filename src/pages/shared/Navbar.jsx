import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user);
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><a className="justify-between">About</a></li>
        <li><a>Services</a></li>
        <li><a>Blog</a></li>
        <li><a>Contact</a></li>
    </>

    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="navbar bg-base-100 rounded-xl mb-10 mx-auto">
            <div className="navbar-start justify-between md:justify-normal">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='h-3/4' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex items-center">
                <ul className="menu menu-horizontal px-1 font-bold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <p className='font-semibold'>
                    {user?.displayName}
                </p>
                {
                    user? <button onClick={handleLogOut} className='btn bg-orange-600 border-none'>Log Out</button> : <Link to='/login' className="btn bg-orange-600 border-none">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;