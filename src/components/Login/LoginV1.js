import axios from 'axios';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { EndPoint } from '../util/EndPoints';

// async function loginUser(credentials) {

//     const input = { name: credentials.username, password: credentials.password }
//     const url = "http://localhost:8085/zx-demo/auth/getTokenById/2"
//     axios.get(url, { headers: { 'Authorization': '111', "Content-Type": 'application/json' } })
//         .then((response) => {
           
//         }).catch((error) => {
//             console.log(error);
//         })
// }


async function getCsrfToken() { 
 
    const url = "http://localhost:8085/zx-demo/csrf/token"
    axios.get(url, { headers: {"Content-Type": 'application/json' } })
        .then((response) => {
           console.log('response.............',response.data);
           return response.data;
        }).catch((error) => {
            console.log(error);
        })
}

// async function csrfToken() {
        
//     const url = "http://localhost:8085/zx-demo/csrf/token"
//     return  fetch(url, {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'        
//       }
      
//     })
//       .then(data => data.json())
      
//    }

 
async function loginUser(credentials) {
    
    const input = { name: credentials.username, password: credentials.password }
    return  fetch(EndPoint.LOGIN, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(input)
      
    })
      .then(data => data.json())
      
   }


export default function LoginV1({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [csrfToken, setCsrfToken] = useState();
  //  let navigate = useNavigate();
  
    console.log('token.........'+token)
    const handleSubmit = async e => {
        e.preventDefault();
        const resp = await loginUser({
            username,
            password
        });
        if(resp.status === 'success')
             setToken(resp); 
        
        //navigate(`dashboard`);
       
    }

   
    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label  className='ml-2'>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)} />
                </label>
                <div className='text-center mt-3'>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

