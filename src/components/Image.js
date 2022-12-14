import React, { useEffect, useState } from 'react';
import image0 from './assets/kr.jpg';
import image1 from './assets/kr1.jpg';
import image2 from './assets/kr2.jpg';
import image3 from './assets/kr3.jpg';
import image4 from './assets/kr4.jpg';
import image5 from './assets/kr5.jpg';
import image6 from './assets/alatoo logo.jpg';
import '../App.css';


const Image = () => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [allImages, setAllImages] = useState([image0, image1, image2, image3, image4, image5])

    useEffect(() => {
        setInterval(() => {
            setSelectedImage(selectedImage => selectedImage > 3 ? selectedImage + 1 : 0)
        }, 99999)
    }, [])

    return (
        <div className='position'>
            <h1>KYRGYZSTAN</h1>
            <p>Click the buttons to change images</p>
            <br />
            <img src={allImages[selectedImage]} alt="flag" className='image' />
            <div>
                <button
                    onClick={() => {
                        if (selectedImage > 0)
                            setSelectedImage(selectedImage - 1)
                    }}
                    className='btn'
                >◀</button>
                <button
                    onClick={() => {
                        if (selectedImage < allImages.length - 1)
                            setSelectedImage(selectedImage + 1)
                    }}
                    className='btn'>▶
                </button>

            </div>
            <img src={image6} alt="logo" width={60} className="logo" />
        </div>
    )
}

export default Image