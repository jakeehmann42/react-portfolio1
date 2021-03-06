import React from "react";




function About() {



    const styles = {

        h2: {
            paddingBottom: "50px",
            paddingTop: "20px",

        },
        container: {
            background: "linear-gradient(rgba(0, 0, 0, 0.2),  rgba(0,0,0,0.6))",
            marginTop: "30px",
            marginBottom: "150px"
        }
    }







    return(
        <>
            <div className="container" style={styles.container}>
                <div className="row">
                    <div className="col text-center">
                        <h2 className="text-black" style={styles.h2}>About Me!</h2>
                    </div>
                </div>
                <div className="row">
                    

                    <div className="col text-center">
                        <h2>
                        Aloha! I am Jake Ehmann from Mesa, Arizona. I am a Full Stack web developer through the University of Arizona.
                        I am very interested in pursuing this field further,I currently work as a lockbox employee at CIT bank. 
                        My technical skills include HTML 5, CSS 3, Bootstrap 4, Bulma, Git, GitHub, JavaScript, jQuery, JSON/BSON, AJAX,
                        REST APIs, Node.js, Express and Express-Handlebars, MySQL, Sequelize, MVC, MongoDB/Mongoose and React.
                        </h2>
                    </div>
                </div>
        </div>

        <br/>
        <hr/>
        <br/>
    
        </>
    )
}

export default About;