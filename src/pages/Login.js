import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {

    const navigate = useNavigate();

    //state for email and password
    const [Username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    //on change event for email and password
    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmitLogin = async () => {

        let user = {
            username: Username,
            password: password
        }

        await axios.post('/login-user', user)
            .then(res => {
                navigate('/home');
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userRole', res.data.role);
                window.location.reload();
            })
            .catch(err => {
                alert("Invalid username or password");
            })
    }
        
    return (
        <section className="Form my-4 mx-5">
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="row no-gutters" style={{ background: "white" , borderRadius: "30px" }}>
                    <div className="col-lg-5">
                        <img src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                        width="100px" height="500px" alt=""
                        style={{ borderTopLeftRadius: "30px", borderBottomLeftRadius: "30px" }} />
                    </div>
                    <div className="col-lg-7 px-5 pt-5">
                        <h1 className="font-weight-bold py-3 px-4">Login</h1>
                        <h4 className="font-weight-bold py-3 px-4">Sign Into Your Account</h4>
                        <form>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input type="text" placeholder="Username" className="form-control my-3 p-3" onChange={onChangeUsername} value={Username} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <input type="password" placeholder="Password" className="form-control my-3 p-3" onChange={onChangePassword} value={password} />
                                </div>
                            </div>
                            <div className="form-row my-5">
                                <div className="col-lg-7">
                                    <button type="button" className="btn1" onClick={onSubmitLogin}
                                    style={{ border: "none", outline: "none", height: "50px", width: "100%",
                                    backgroundColor: "black", color: "white", borderRadius: "4px", fontWeight: "bold"  }}>Login</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;