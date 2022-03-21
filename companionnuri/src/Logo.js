import React from 'react';
import image from './logo.png';

function Logo() {

    const logoClick = () => {
        window.location.href = "/";
    }

    return (
        <img onClick={logoClick} src={image} />
    );
}

export default Logo;