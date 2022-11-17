import React, { useState } from 'react';
import axios from 'axios';

const Manager = () => {

    const [message, setMessage] = useState("");
    const [file, setFile] = useState(null);

    const onSubmitSendFileMessage = async () => {

        if (message !== "" && file === null) {
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
        else if ((message === "" && file !== null) || (message !== "" && file !== null)) {
            let formData = new FormData();
            formData.append('image', file);
            formData.append('message', message);
            console.log(formData);
            await axios.post('/file-message-upload', formData)
                .then(res => {
                    alert("Message and File sent successfully");
                })
                .catch(err => {
                    alert("Message and File sending failed");
                })
        }
        else {
            alert("Please enter a message or select a file");
        }
    }

    return (
        <section className="Form my-4 mx-5">
            <div className="container" style={{ marginTop: "100px" }}>
                <div className="row no-gutters" style={{ background: "white" , borderRadius: "30px" }}>
                    <div className="col-lg-12 px-5 pt-5">
                        <h1 className="font-weight-bold py-3 px-4">Message & File Upload</h1>
                        <h4 className="font-weight-bold py-3 px-4">Send Your Message and File</h4>
                        <form>
                            <div className="form-row">
                                <div className="col-lg-10">
                                    <input type="text" placeholder="Username" className="form-control my-3 p-3"
                                        onChange={(e) => setMessage(e.target.value)} value={message}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-10">
                                    <input type="file" placeholder="Upload File" className="form-control my-3 p-3"
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />
                                </div>
                            </div>
                            <div className="form-row my-5">
                                <div className="col-lg-10">
                                    <button type="button" className="btn1"
                                        onClick={onSubmitSendFileMessage}
                                        style={{ border: "none", outline: "none", height: "50px", width: "100%",
                                        backgroundColor: "black", color: "white", borderRadius: "4px", fontWeight: "bold"  }}>Send Message / File</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Manager