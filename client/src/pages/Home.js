import React from 'react';

import image from '../images/DSC01193.jpg'
import hero from '../images/Hero-Gallery.PNG'
const Home = () => {

    const style = {
        hero1: {
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            backgroundPosition: "50% 100%"
        },
        hero2: {
            backgroundImage: `url(${hero})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "65vh",
            width: "100%",
            backgroundPosition: "100% 70%"
        },
        mask: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
        },
        maskBox: {
            width: "auto",
            height: "100vh",
        },
        sampleStyle: {
            height: "70vh"
        },
        sampleBox1: {
            width: "100%",
            height: "80%",
        },
        sampleContent: {
            marginTop: "10%",
            padding: "0 5% 0 5%",
        },
    }

    return (
        <main>
            <div className="text-center bg-image" style={style.hero1}>
                <div className="mask" style={style.mask}>
                    <div className="d-flex justify-content-center align-items-center h-200 p-2" style={style.maskBox}>
                        <div className="text-white">
                            <h1 className="mb-3">Welcome to PJ-FADES</h1>
                            <h4 className="mb-3">Fresh Haircuts right to you~</h4>
                            <h4 className="mb-3">Make a reservation!</h4>
                            <a className="btn btn-outline-light btn-lg" href="/reservation" role="button">Reservation</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 d-flex flex-column-reverse flex-lg-row align-item-center shadow p-3 mb-5 bg-body rounded" style={style.sampleStyle}>
                <div className="bg-image shadow p-3 mb-5 bg-body rounded" style={style.hero2}></div>
                <div className="text-center" style={style.sampleBox1}>
                    <div style={style.sampleContent}>
                        <h1 className="mb-4">Sample Visuals</h1>
                        <a className="fs-4" href="/gallery">Go to Gallery</a>
                    </div>
                </div>
            </div>
            <div className="container mt-5 border border-dark" style={style.sampleStyle}>

            </div>
        </main>
    )
};

export default Home;