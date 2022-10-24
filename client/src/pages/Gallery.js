import React, {useState} from 'react';
import {useMediaQuery} from 'react-responsive'
// either import image from a folder
// import imageTest1 from '../img/imgTest1.png';
import images from '../images'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Gallery = () => {

    const [currImage, setImage] = useState(0)
    const handleClick = (num) => {
        const index = num;
        setImage(index);
    }

    const isLaptop = useMediaQuery({query: '(min-width: 1024px)',})

    const style = {
        offset: {
            height: "75px"
        },
        main: {
            height: "1000px"
        },
        mainOff: {
            height: "1000px"
        },
        content1: {
            height: "90%",
            width: "100%"
        },
        content2: {
            height: "50%",
            width: "100%"
        },
        mainPic: {
            height: "100%",
            width: "auto",
            objectFit: "contain"
        },
        onePic: {
            height: "auto",
            width: "90%"
        },
        pics: {
            height: "150px",
            width: "150px",
            objectFit: "cover",
            borderRadius: "15px",
            cursor: "pointer",
            borderStyle: "solid"
        },
        box: {
            height: "95%",
            width: "100%"
        }
    }
    return (
        <main>
            <div style={style.offset}></div>
            <div style={style.main}>
                <h1 className='text-center mt-5'>Gallery</h1>
                <div className='d-flex flex-column flex-lg-row align-items-center' style={style.box}>
                    <div className='bg-light d-flex justify-content-center align-items-center' style={isLaptop ? style.content1 : style.content2}>
                        {currImage === 0 || currImage === 5 ? 
                        <img style={style.onePic} src={images[currImage]} alt="expanded"></img> : 
                        <img style={style.mainPic} src={images[currImage]} alt="expanded"></img>
                        }
                    </div>
                    <div className='d-flex flex-row bg-light' style={isLaptop ? style.content1 : style.content2}>
                        <Row className='text-center mt-3' sm={1}  >
                            <Col><img src={images[0]} style={style.pics} onClick={() => handleClick(0)} alt="hero"></img></Col>
                            <Col><img src={images[1]} style={style.pics} onClick={() => handleClick(1)} alt="hero"></img></Col>
                            <Col><img src={images[2]} style={style.pics} onClick={() => handleClick(2)} alt="hero"></img></Col>
                        </Row>
                        <Row className='text-center mt-3' sm={1} >
                            <Col><img src={images[3]} style={style.pics} onClick={() => handleClick(3)} alt="hero"></img></Col>
                            <Col><img src={images[4]} style={style.pics} onClick={() => handleClick(4)} alt="hero"></img></Col>
                            <Col><img src={images[5]} style={style.pics} onClick={() => handleClick(5)} alt="hero"></img></Col>
                        </Row>
                        <Row className='text-center mt-3' sm={1}>
                            <Col><img src={images[6]} style={style.pics} onClick={() => handleClick(6)} alt="hero"></img></Col>
                            <Col><img src={images[7]} style={style.pics} onClick={() => handleClick(7)} alt="hero"></img></Col>
                            <Col><img src={images[8]} style={style.pics} onClick={() => handleClick(8)}alt="hero"></img></Col>
                        </Row>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Gallery;