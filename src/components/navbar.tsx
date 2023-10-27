import React, {useState} from 'react';
import { useRouter } from 'next/router';

function Navbar() {
  
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (

    
    
    <>
        <div className="flex fixed justify-between top-0 z-10 px-10 bg-purple-300 w-screen py-5 shadow-md">
            <h1>ニュース</h1>
            <div>
                <div className="flex flex-row">
                    <div className="flex flex-row mx-4">
                        <button className="px-1 mx-1 bg-purple-500" onClick={() => router.push('/login')}>Login</button>
                            <p className="mx-2">|</p>
                        <button className="px-1 mx-1 bg-green-500" onClick={() => router.push('/signup')}>Signup</button>
                    </div>
                    <button
                        onClick={toggleMenu}
                        className="block text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                    >
                        <div
                        className={`w-6 h-0.5 bg-gray-500 my-1 transition-all ${isOpen ? 'transform rotate-45 fixed top-6' : ''}`}
                        ></div>
                        <div
                        className={`w-6 h-0.5 bg-gray-500 my-1 transition-all ${
                            isOpen ? 'opacity-0' : ''
                        }`}
                        ></div>
                        <div
                        className={`w-6 h-0.5 bg-gray-500 my-1 transition-all ${isOpen ? 'transform -rotate-45 fixed top-6' : ''}`}
                        ></div>
                    </button>
                </div>
                {/* Your menu content */}
                <div className={`absolute left-0 w-full z-20 mt-8 text-right pr-10 bg-white shadow-lg rounded-lg ${isOpen ? '' : 'hidden'}`}>
                    <h2>well heeey</h2>
                    <h2>what's going on </h2>
                    <h2>this</h2>
                </div>
                </div>

        </div>
    </>
  );
}

export default Navbar;