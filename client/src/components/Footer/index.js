import React from 'react'
import {motion} from 'framer-motion'
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
            height: "125px"
        },
        misc: {
            marginTop: "30px"
        },
    }

    return (
        <div className="text-center bg-secondary text-white align-items-center" style={style.box}>
            <div className='d-flex flex-row justify-content-center gap-4' >
                <motion.a whileHover={{scale:1.2}} href="/"><BsInstagram style={style.icons}/></motion.a>
                <div className="vr" style={style.misc}></div>
                <motion.a whileHover={{scale:1.2}} href="/"><BsTwitter style={style.icons}/></motion.a>
                <div className="vr" style={style.misc}></div>
                <motion.a whileHover={{scale:1.2}} href="/"><BsFacebook style={style.icons}/></motion.a>
            </div>
        </div>
    );
}

export default Footer;