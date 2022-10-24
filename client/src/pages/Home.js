import React from 'react';

import image from '../images/gallery/DSC01193.jpg'
import hero from '../images/gallery/Hero-Gallery.PNG'
import placeholder from "../images/placeholder/placeholder-image.png"
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
        sampleHeight: {
            height: "70vh"
        },
        sampleHeight1: {
            height: "500px"
        },
        sampleBox1: {
            width: "100%",
            height: "80%",
        },
        sampleContent: {
            marginTop: "10%",
            padding: "0 5% 0 5%",
        },
        placeholder: {
            height: "60%",
            width: "25%"
        }
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
            <div className="container mt-5 d-flex flex-column-reverse flex-lg-row align-item-center shadow p-3 mb-5 bg-body rounded" style={style.sampleHeight}>
                <div className="bg-image shadow p-3 mb-5 bg-body rounded" style={style.hero2}></div>
                <div className="text-center" style={style.sampleBox1}>
                    <div style={style.sampleContent}>
                        <h1 className="mb-4">Sample Visuals</h1>
                        <a className="fs-4" href="/gallery">Go to Gallery</a>
                    </div>
                </div>
            </div>
            <div className="text-center bg-dark text-white d-flex flex-column" style={style.sampleHeight1}>
                <div className='container'>
                    <h1 className='mt-3'>About me or My story?</h1>
                    <img className='border border-light mt-3' src={placeholder} alt="Placeholder" style={style.placeholder}></img>
                </div>
                <div className='container'>
                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </main>
    )
};

export default Home;