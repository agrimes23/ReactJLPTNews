import Navbar from '@/components/navbar';
import React, { useState } from 'react';

const Signup: React.FC = () => {

    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        });

    const { email, password } = inputValue;

    const handleOnChange = (e: any) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("oo submitted: email: ", email + ", Password: " + password)
    }

    return (
        
        <div className="flex flex-col min-h-screen min-w-screen items-center">
            <Navbar/>
            <div className="flex items-center h-screen">

            <form onSubmit={handleSubmit}>
                <div>
                <input className=""
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Email or Student ID"
                    onChange={handleOnChange}
                />
                </div>

                <div>
                <div>
                </div>
                <input className=""
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={handleOnChange}
                />
                </div>
                <button className="" type="submit">Login</button><br /><br />
                <div className="text-center font-input text-lightGray">
                New to our app? <a className="underline" href="/signup">Register</a>
                </div>
            </form>
            </div>
        </div>
    );
    };

export default Signup;