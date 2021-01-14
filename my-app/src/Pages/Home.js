import React from "react";
import { Link } from "react-router-dom";





function Main() {



    const styles = {
        heroContents: {
            paddingTop: "250px",
            textAlign: "center",
            color: "white"
        },

        button: {
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            marginRight: "10px"
        },

        container: {
            background: "linear-gradient(rgba(0, 0, 0, 0.5),  rgba(0,0,0,0.9))",
            marginTop: "50px",
            marginBottom: "150px",
            paddingBottom: "50px"
        }
    }


//return function

    return(
        <>
            <div style={styles.heroContents}>
                <div className="col text-center">
                    <h1 className="mx-auto text-white">Jake Ehmann</h1>
                    <hr/>
                    <p className="lead mx-auto">I am a Full-Stack Developer!</p>

                    <Link to="/About"><button className="btn btn-success button" style={styles.button}>About Me</button></Link>
                    
                    
                    
                    
                    <Link to="/Portfolio"><button className="btn btn-success button" style={styles.button}>
                            Portfolio
                        </button></Link>
                    
                    
                    
                    
                    <Link to="/Contact"><button className="btn btn-success button" style={styles.button}>
                            Contact
                        </button></Link>
                </div>
            </div>
        </>
    )
}

export default Main;