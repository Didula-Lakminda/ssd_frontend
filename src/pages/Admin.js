import React, { useState } from 'react';
import axios from 'axios';

const Admin = () => {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [role, setRole] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const RegisterUser = async () => {

        let user = {
            name: name,
            email: email,
            role: role,
            username: username,
            password: password
        }

        await axios.post('/register-user', user)
            .then(res => {
                alert("User registered successfully");
            })
            .catch(err => {
                alert(err.response.data.message);
            })
    }

    return (
        <section className="Form mx-5">
            <div className="container" style={{ marginTop: "60px" }}>
                <div className="row no-gutters" style={{ background: "white" , borderRadius: "30px" }}>
                    <div className="col-lg-12 px-5 pt-5">
                        <h1 className="font-weight-bold py-3 px-4">Add User</h1>
                        <h4 className="font-weight-bold py-3 px-4">Register a new user</h4>
                        <form>
                            <div className="form-row">
                                <div className="col-lg-10">
                                    <input type="text" placeholder="Name" className="form-control my-3"
                                        onChange={(e) => setName(e.target.value)} value={name}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-10">
                                    <input type="email" placeholder="Email" className="form-control my-3"
                                        onChange={(e) => setEmail(e.target.value)} value={email}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-10">
                                    <select class="form-select" onChange={(e) => setRole(e.target.value)} value={role}>
                                        <option selected>Select Role</option>
                                        <option value="manager">Manager</option>
                                        <option value="worker">Worker</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-10">
                                    <input type="text" placeholder="Username" className="form-control my-3"
                                        onChange={(e) => setUsername(e.target.value)} value={username}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-10">
                                    <input type="password" placeholder="Password" className="form-control my-3"
                                        onChange={(e) => setPassword(e.target.value)} value={password}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-row my-5">
                                <div className="col-lg-10">
                                    <button type="button" className="btn1"
                                        onClick={RegisterUser}
                                        style={{ border: "none", outline: "none", height: "50px", width: "100%",
                                        backgroundColor: "black", color: "white", borderRadius: "4px", fontWeight: "bold"  }}>Register User</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Admin