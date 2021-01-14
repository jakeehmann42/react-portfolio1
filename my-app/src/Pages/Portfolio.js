import React from "react";
import { Link } from "react-router-dom";


//PROJECTS GO BELOW


function Portfolio() {



    const styles = {

        h2: {
            paddingBottom: "20px",
            paddingTop: "20px",
        },


        card: {
            maxWidth: "20rem",
        },


        container: {
            background: "linear-gradient(rgba(0, 0, 0, 0.5),  rgba(0,0,0,0.9))",
            marginTop: "50px",
            marginBottom: "150px",
            paddingBottom: "50px"
        }
    }




//return function, look at past...



    return(
        <>
        <div className="container" style={styles.container}>
            <div className="row justify-content-center">
                <h2 className="text-white" style={styles.h2}>Portfolio
                </h2>
                <br/>
            </div>





            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="card mx-auto mb-3" style={styles.card}>

                        <h5 className="card-title text-center">BeerCrawlr</h5>
                        <div className="card-body text-center">
                            <p className="card-text">A brewery and restaurant search app that I created with a team of four.
                                Utilizes JavaScript, jQuery, AJAX, and APIs. Front-end built using HTML5 and Bulma. </p>
                            <Link to="https://joeybrown-ctrl.github.io/Beercrawlr/" className="btn btn-success"
                                target="_blank">View Project</Link>
                            <hr/>
                            <Link to="https://github.com/joeybrown-ctrl/Beercrawlr" className="btn btn-success"
                                target="_blank">View Repository</Link>
                        </div>
                    </div>
                </div>








                <div className="col-lg-4">
                    <div className="card mx-auto mb-3" style={styles.card} >
                        
                        <hr/>
                        <h5 className="card-title text-center">Quizzical</h5>
                        <div className="card-body text-center">
                            <p className="card-text">Quizzical is an app that I built with 3 other teammates.
                            We succesfully used </p>
                            <Link to="https://magic-gathering-app.herokuapp.com/" className="btn btn-success" target="_blank">View
                                Project</Link>
                            <hr/>
                            <Link to=" https://github.com/Sltang0815/projectTwo" className="btn btn-success"
                                target="_blank">View Repository</Link>
                        </div>
                    </div>
                </div>






                <div className="col-lg-4">
                    <div className="card mx-auto mb-3" style={styles.card}>
                        
                        <hr/>
                        <h5 className="card-title text-center">Burger Logger</h5>
                        <div className="card-body text-center">
                            <p className="card-text">A burger logger app built with MySQL, Node, Express, and Handlebars.
                                Created this app following the MVC design pattern, and deployed to Heroku. Node and
                                MySQL are used to query and route data through the app, and Handlebars generates the
                                HTML and Bootstrap front-end.</p>
                            <Link to="https://burger-logger8080.herokuapp.com/s" className="btn btn-success"
                                target="_blank">View Project</Link>
                            <hr/>
                            <Link to="https://github.com/jakeehmann42/burger" className="btn btn-success"
                                target="_blank">View Repository</Link>
                        </div>
                    </div>
                </div>
            </div>



            <hr/>
            <br/>
            <br/>







            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <div className="card mx-auto mb-3" style={styles.card}>
                        
                        <hr/>
                        <h5 className="card-title text-center">Note Taker</h5>
                        <div className="card-body text-center">
                            <p className="card-text">A note-taking app for users to keep notes that are easily accessible.
                            Allows users to create, save and delete notes. Utilizes an Express back-end and uses GET, POST and DELETE methods with HTML and API routes to work with data.
                            Built with Javascript, Express.js, Node.js, CSS and HTML. Deployed via Heroku.
                            </p>
                            <Link to="https://limitless-waters-28533.herokuapp.com/" className="btn btn-success"
                                target="_blank">View Project</Link>
                            <hr/>
                            <Link to="https://github.com/jakeehmann42/noteTaker" className="btn btn-success"
                                target="_blank">View Repository</Link>
                        </div>
                    </div>
                </div>





                <div className="col-lg-4">
                    <div className="card mx-auto mb-3" style={styles.card}>
                        <hr/>
                        <h5 className="card-title text-center">Employee Directory</h5>
                        <div className="card-body text-center">
                            <p className="card-text">Description...</p>
                            <Link to="https://github.com/jakeehmann42/employeeDirectory" className="btn btn-success"
                                target="_blank">View Project</Link>
                        </div>
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

export default Portfolio;