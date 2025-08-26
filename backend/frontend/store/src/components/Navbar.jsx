import Model from './Model';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

function Navbar(){
    const [isOpen , setIsOpen] = useState(false);
    const setShowDialog = () => {
            setIsOpen(true); 
    };
    const closeDialog = () => {
        setIsOpen(false);
    };
    const [islogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, [localStorage.getItem('token')]);
    const checklogin = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        window.location.href = '/';
    };
    return <>
    <header>
        <nav className="navbar">
            <div className="logo">Store</div>
            <ul>
                <li><a className="nav-link" href="/">Home</a></li>
                <li><a className="nav-link" href="/my-products" >My Products</a></li>
                <li><a className="nav-link" href="/about">About</a></li>
                <li><a className="nav-link" href="/contact">Contact</a></li>
                {islogin   ? (
                    <>
                        <li><a className="nav-link" href="/profile">Profile</a></li>
                        <li><button className='btn btn-danger' onClick={checklogin
                        }>Logout</button></li>
                    </>
                ) : <li><button className="btn btn-success" onClick={setShowDialog}>Open Dialog</button></li>}
                
            </ul>
        </nav>
        
    </header>
    {isOpen && <Model closeDialog={closeDialog} />}
    </>
}

export default Navbar;