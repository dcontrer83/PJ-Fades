import React from 'react'
import {motion} from 'framer-motion'
import { BsInstagram } from 'react-icons/bs'

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
        <div data-testid="div-1-element" className="text-center bg-secondary text-white align-items-center" style={style.box}>
            <div data-testid="div-2-element" className='d-flex flex-row justify-content-center gap-4' >
                <motion.a data-testid="a-element" whileHover={{scale:1.2}} href="https://instagram.com/pushnpj?igshid=YmMyMTA2M2Y=" target="_blank"><BsInstagram data-testid="instagram" style={style.icons}/></motion.a>
            </div>
        </div>
    );
}

export default Footer;