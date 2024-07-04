import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { EndPoint } from '../util/EndPoints';
import { useNavigate } from "react-router-dom";

const LoginV2 =()=>  {
        const [user, setUser] = useState(null);
        const [password, setPassword] = useState(null);
        const [csrfToken, setCsrfToken] = useState(null);
        const navigate = useNavigate();

     const  getCsrfToken=()=> {  
     const url = "http://localhost:8085/zx-demo/csrf/token"
        axios.get(url, { headers: {"Content-Type": 'application/json', }}, {withCredentials: true})
        .then((response) => {
           console.log('response.............',response.data);
           setCsrfToken(response.data.token);
        }).catch((error) => {
            console.log(error);
        })
    }

 
    useEffect(() => {
        getCsrfToken();
    }, []);

    const loginUser = () => {     
       
         const input = { name: user, password: password }
       //  let navigate = useNavigate();
        axios.post(EndPoint.LOGIN, input,{ headers: { "X-CSRFTOKEN": csrfToken,"Content-Type": 'application/json' }, }, {withCredentials: true})
            .then((response) => {
                console.log('response..............',response);
                // this.history.push("/dashboard");
                 navigate("/dashboard");
                //navigate(`dashboard`);          
            }).catch((error) => {
                console.log(error);
            })
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        loginUser();
        console.log('evnt..............',event);
    }
 
        
        return (
            <div className="login-wrapper">
                <h1>Please Log In</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input type="text" name={"user"} onChange={(e)=>setUser(e.target.value)}/>
                    </label>
                    <label>
                        <p>Password</p>
                        <input type="password" name={"pass"} onChange={(e)=>setPassword(e.target.value)}/>
                    </label>
                    <div>
                        <button type="submit" >Submit</button>
                    </div>
                </form>
            </div>
        )
    }

 
export default LoginV2;
