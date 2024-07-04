import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import '../Login/Login.css';

async function loginUser(credentials) {

    const input = {name: credentials.username, password: credentials.password}
    const url =  "http://localhost:8085/zx-demo/auth/getTokenById/2"
    axios.get(url,   { headers: { 'Authorization': '111', "Content-Type":'application/json' } })
    .then((response) => {
        return response;        
    }).catch((error) => {
        console.log(error); 
    })  

    // const input = {name: credentials.username, password: credentials.password}
    // const url =  "http://localhost:8085/zx-demo/auth/login"
    // axios.post(url, input, {headers: {'Content-Type': 'application/json'}})
    // .then((response) => {
    //     console.log('resp...................',response);
    // }).catch((error) => {
    //     console.log(error); 
    // }) 
    
    // return fetch('http://localhost:8085/zx-demo/auth/login', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(input)
    // })
    //     .then(data => data.json())
}


 
export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
         const token = await loginUser({
             username,
             password
         });

        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};