import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import MyContext from './Context';
import { useLocation } from 'react-router-dom';
import Logout from './Logout';
function Navbar() {
    const { isLoggedIn,username } = useContext(MyContext)
    const location = useLocation();
    const currentLocation = location.pathname
    console.log(currentLocation)
    return (
        <div className="">
            <div className="bg-transperent border-b-2 p-4  z-40 flex justify-between">
                <ul className='flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 justify-center text-2xl p-4 font-semibold'>

                    <li>
                        <NavLink to="/"
                            className={({ isActive }) =>

                                `${isActive ? 'text-white' : 'text-black'}
                 block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login"
                            className={({ isActive }) =>

                                `${isActive ? 'text-white' : 'text-black'}
                 block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                            }
                        >
                            Login
                        </NavLink>

                    </li>
                    <li>
                        <NavLink to="/signup"
                            className={({ isActive }) =>

                                `${isActive ? 'text-white' : 'text-black'}
                 block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`
                            }
                        >
                            Register
                        </NavLink>
                    </li>

                </ul>
                <ul className='flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 justify-center text-2xl p-4 font-semibold'>
                    <li className='block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0'>
                    {isLoggedIn && currentLocation === '/folders' ?`Logged in as ${username}`: ""}</li>
                </ul>
                <ul className='flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 justify-center text-2xl p-4 font-semibold'>
                    <li className={({ isActive }) =>

                    `${isActive ? 'text-white' : 'text-black'}
     block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0`}>
                        {isLoggedIn && currentLocation === '/folders' ?<Logout/> : ""}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
