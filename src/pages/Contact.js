import React from "react";
import { Link } from "react-router-dom";



function Contact() {





    const styles = {



        container: {
            background: "linear-gradient(rgba(0, 0, 0, 0.5),  rgba(0,0,0,0.9))",
            marginTop: "50px",
            marginBottom: "150px",
            paddingBottom: "50px"
        }
    }





// Another return || look back at Home.js for reference.

    return(
        <>
        <div className="container" style={styles.container}>
            <div className="row justify-content-center">
                <div className="col text-center text-white">
                    <hr/>




                    <div><Link to="../../public/Assets/Resume.pdf" className="btn-floating btn-lg" role="button" target="_blank">
                            <h4 className="text-white">View Resume</h4>
                        </Link>
                    </div>
                    <hr/>





                    <div><Link to="https://www.linkedin.com/in/jake-ehmann-4024151b3/"
                            className="btn-floating btn-lg btn-li text-white" role="button" target="_blank"><i
                                className="fab fa-linkedin-in"></i> Jake Ehmann</Link>
                    </div>
                    <hr/>





                    <div><Link to="https://github.com/jakeehmann42" className="btn-floating btn-lg btn-git text-white"
                            role="button" target="_blank"><i className="fab fa-github"></i> Jakeehmann42</Link>
                    </div>
                    <hr/>





                    <div><Link to="mailto:jakeehmann42@gmail.com" className="btn-floating btn-lg btn-email text-white"
                            role="button" target="_blank"><i className="fas fa-envelope"></i> jakeehmann42@gmail.com</Link>
                    </div>
                    <hr/>





                    <div><Link to="tel: (330) 990-3629" className="btn-floating btn-lg btn-email text-white" role="button"
                            target="_blank"><i className="fa fa-phone" aria-hidden="true"></i> (330) 990-3629</Link>
                    </div>

                </div>
            </div>
        </div>

        <br/>
        <hr/>
        <br/>
        </>
    )
}

export default Contact;