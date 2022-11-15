import React, { useState } from 'react';
import axios from 'axios';

const Worker = () => {

    const [message, setMessage] = useState("");

    const onSubmitSendMessage = async () => {

        let textmessage = {
            message: message
        }

        await axios.post('/create-message', textmessage)
            .then(res => {
                alert("Message sent successfully");
            })
            .catch(err => {
                alert("Message sending failed");
            })
    }


    return (
        <section className="Form my-4 mx-5">
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="row no-gutters" style={{ background: "white" , borderRadius: "30px" }}>
                    <div className="col-lg-12 px-5 pt-5">
                        <h1 className="font-weight-bold py-3 px-4">Message</h1>
                        <h4 className="font-weight-bold py-3 px-4">Send Your Message</h4>
                        <form>
                            <div className="form-row">
                                <div className="col-lg-10">
                                    <input type="text" placeholder="Username" className="form-control my-3 p-3"
                                        onChange={(e) => setMessage(e.target.value)} value={message}
                                    />
                                </div>
                            </div>
                            <div className="form-row my-5">
                                <div className="col-lg-10">
                                    <button type="button" className="btn1"
                                        onClick={onSubmitSendMessage}
                                        style={{ border: "none", outline: "none", height: "50px", width: "100%",
                                        backgroundColor: "black", color: "white", borderRadius: "4px", fontWeight: "bold"  }}>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Worker
