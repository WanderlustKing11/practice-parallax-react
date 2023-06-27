import { Parallax } from 'react-parallax';
import { useEffect } from 'react';
import { throttle } from 'lodash';
import img_04 from '../img/space_img04.jpg';

const ImageFour = () => {
  useEffect(() => {
    const handleScroll = throttle (() => {
      const parallaxContainer = document.getElementById('parallax-container');
      if (parallaxContainer) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        parallaxContainer.style.transform = `translate3d(0, ${scrollTop}px, 0)`;
      }
    }, 16);

    window.addEventListener('scroll', handleScroll);

    return() => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id='parallax-container' style={{ position: 'relative', height: '100vh' }}>  <Parallax className='image' bgImage={img_04} strength={800}>
    <div className='content'>
      <span className='img-txt'> hello, world</span>
    </div>
  </Parallax>
  </div>
)};

export default ImageFour;