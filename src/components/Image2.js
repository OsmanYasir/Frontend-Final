import React from 'react'
import image0 from './assets/kyrgyzclothing01.jpg';
import image1 from './assets/kyrgyzclothing02.jpg';
import image2 from'./assets/kyrgyzclothing03.jpg';
import image3 from './assets/kyrgyzclothing04.jpg';
import image4 from'./assets/kyrgyzclothing05.jpg';
import image5 from './assets/kyrgyzclothing06.jpg';
import image6 from './assets/kyrgyzclothing07.jpg';
import logo  from './assets/kalpak.webp';
import { useState, useEffect  } from 'react';

const Image2 = () => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [allImages, setAllImages] = useState([image0, image1, image2, image3, image4, image5])
         
     
    useEffect(() => {
        setInterval(() => {
            setSelectedImage(selectedImage => selectedImage > 3 ? selectedImage + 1 : 0)
        }, 99999)
    }, [])
     
         return (
            <div>
            <h1>KYRGYZSTAN</h1>
            <p id='clothes'>National Clothes</p>
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
            <div className='img2'>
            <a href="#clothes"><img src={logo} alt="logo" width={60} className="logo2"/></a>
            </div>
            </div>
    )
}

export default Image2