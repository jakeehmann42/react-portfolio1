import React from "react";

function Hero() {

    const styles = {
        heroImage: {

            //background: GET URL

            minHeight: "1000px",
            minWidth: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative"
        }
    }

    return(
        <>
        <Hero style={styles.heroImage} />
        </>
    )
}

export default Hero;