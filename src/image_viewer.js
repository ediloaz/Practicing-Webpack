import small from '../assets/small.jpg';
import big from '../assets/big.jpg';

import '../styles/image_viewer_3.css'
import '../styles/image_viewer_2.css'


export default () => {
    const image = document.createElement('img');
    image.src = small;
    // image.src = "./../assets/image-400x400.jpg";
    document.body.appendChild(image);
    
    const span = document.createElement('span');
    span.innerHTML = "I'm a span 😀🤣";
    document.body.appendChild(span);
}

