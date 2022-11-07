import React from 'react'

const Manager = () => {
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
                                    <input type="text" placeholder="Username" className="form-control my-3 p-3" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-10">
                                    <input type="file" placeholder="Upload File" className="form-control my-3 p-3" />
                                </div>
                            </div>
                            <div className="form-row my-5">
                                <div className="col-lg-10">
                                    <button type="button" className="btn1"
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