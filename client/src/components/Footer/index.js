import React from 'react'

import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs'

const Footer = () => {

    const style = {
        icons: {
            height: "50px",
            width: "50px",
            color: 'white',
            marginTop: "30px"
        },
        box: {
            height: "15vh"
        },
        misc: {
            marginTop: "30px"
        }
    }

    return (
        <div className="text-center bg-secondary text-white align-items-center" style={style.box}>
            <div className='d-flex flex-row justify-content-center gap-4' >
                <a href="/"><BsInstagram style={style.icons}/></a>
                <div className="vr" style={style.misc}></div>
                <a href="/"><BsTwitter style={style.icons}/></a>
                <div className="vr" style={style.misc}></div>
                <a href="/"><BsFacebook style={style.icons}/></a>
            </div>
        </div>
    );
}

export default Footer;