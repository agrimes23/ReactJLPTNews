import React, {useState} from 'react';

function Navbar() {
  
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    return (

    
    
    <>
        <div className="flex justify-between px-10 bg-purple-300 w-screen py-4">
            <h1>ニュース</h1>
            <div className="">
                <button
                    onClick={toggleMenu}
                    className="block text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                >
                    <div
                    className={`w-6 h-0.5 bg-gray-500 my-1 transition-all ${isOpen ? 'transform rotate-45' : ''}`}
                    ></div>
                    <div
                    className={`w-6 h-0.5 bg-gray-500 my-1 transition-all ${
                        isOpen ? 'opacity-0' : ''
                    }`}
                    ></div>
                    <div
                    className={`w-6 h-0.5 bg-gray-500 my-1 transition-all ${isOpen ? 'transform -rotate-45' : ''}`}
                    ></div>
                </button>
                {/* Your menu content */}
                <div className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg ${isOpen ? '' : 'hidden'}`}>
                    {/* Your menu items */}
                </div>
                </div>

        </div>
    </>
  );
}

export default Navbar;