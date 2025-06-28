import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
export const NavBar = () => {
    return (
        <nav className="flex justify-between items-center px-6 py-4 shadow-none rounded-full">
            <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-8"/>
                <span className="text-xl font-bold">Therapy nest</span>
            </div>
            <div className="flex gap-6 items-center font-primary text-gray-700 font-bold">
                <Link to="/features" className="hover:text-blue-600">Features</Link>
                <Link to = "/pricing" className='hover:bg-primary' >Pricing</Link>
                <Link to='avout-us' className='hover:bg-primary'>About Us</Link>
                <Link to='/contact' className='hover:bg-primary'>Contact Us</Link>
                <Link to="/signin">
                <button className='bg-primary text-white rounded-full px-6 py-2 hover:bg-white hover:text-primary'>
                    Sign In
                    </button></Link>
            </div>
        </nav>
    );
}