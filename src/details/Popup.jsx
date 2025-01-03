import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";

const Popup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPopup(true);
        }, 7000); // Delay of 7 seconds

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
    }, []);

    const handleClose = () => setShowPopup(false);

    const sendEmail = () => {
        window.location.href = "mailto:oguntoyinborichman@gmail.com?subject=Let's Connect&body=Hi Taiwo, I visited your portfolio and would love to discuss opportunities!";
    };

    return (
        showPopup && (
            <div 
                className="popup-overlay" 
                style={styles.overlay}
                data-aos="fade-up"
            >
                <div className="popup-content" style={styles.popup}>
                    <h2 style={styles.header}>Hi, I'm Oguntoyinbo Taiwo!</h2>
                    <p style={styles.text}>
                        I'm a passionate <strong>JavaScript Fullstack Developer</strong> <br /> 
                        specializing in building responsive web applications with React, Node.js, 
                        and modern technologies. Let's collaborate and bring your ideas to life!
                    </p>
                    <div style={styles.buttons}>
                        <button onClick={sendEmail} style={styles.button}>
                            Email Me
                        </button>
                        <a 
                            href="https://wa.me/2348029299901?text=Hi%20Taiwo,%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20discuss%20opportunities!" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ ...styles.button, textDecoration: "none" }}
                        >
                            WhatsApp Me
                        </a>
                        <button onClick={handleClose} style={styles.closeButton}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    popup: {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        maxWidth: "400px",
        width: "90%",
    },
    header: {
        fontSize: "1.8rem",
        marginBottom: "10px",
        color: "teal",
    },
    text: {
        fontSize: "1rem",
        lineHeight: "1.6rem",
        marginBottom: "20px",
    },
    buttons: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    button: {
        padding: "10px 15px",
        fontSize: "1rem",
        backgroundColor: "teal",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
    closeButton: {
        padding: "10px 15px",
        fontSize: "1rem",
        backgroundColor: "#DC3545",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
    },
};

export default Popup;
