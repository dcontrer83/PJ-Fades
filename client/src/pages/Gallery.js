import React from 'react';

// either import image from a folder
// import imageTest1 from '../img/imgTest1.png';

const Gallery = () => {
    return (
        <main>
            {/* then call the import */}
            {/* <img src={imageTest1} /> */}

            {/* or use require and use its file location and include .default */}
            {/* <img src={require('../img/imgTest1.png').default} /> */}

        </main>
    )
}