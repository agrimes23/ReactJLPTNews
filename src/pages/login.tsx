import React, { useState } from 'react';
import Navbar from '@/components/navbar';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/queries';

const Login: React.FC = () => {
    const [loginUser] = useMutation(LOGIN_USER, {
        errorPolicy: "all",
        onCompleted: (res: any) => {   
          console.log("login res: ", res)
        },
        onError: (error: any) => {
          console.error("GraphQL error:", error);
        },
    });

    // const { data: data, refetch: refetchArticles } = useMutation<any>(GET_ARTICLES, {
    //     errorPolicy: "all",
    //     onCompleted: (res: any) => {
    //       setNews(res.getArticles)    
    //       console.log("here again")
    //     },
    //     onError: (error: any) => {
    //       console.error("GraphQL error:", error);
    //     },
    //   });


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
        try {
            const { data } = await loginUser({ variables: { input: inputValue } });
            // Handle the response, store the token, and redirect the user.
          } catch (error) {
            // Handle login error (e.g., incorrect credentials, server errors).
          }
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

export default Login;