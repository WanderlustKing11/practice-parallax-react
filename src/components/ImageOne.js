import { Parallax } from 'react-parallax';
import { useEffect } from 'react';
import { throttle } from 'lodash';
import img_01 from '../img/space_img01.jpg';

const ImageOne = () => {
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
    <div id='parallax-container' style={{ position: 'relative', height: '100vh' }}>
    <Parallax
      className='image'
      blur={0}
      bgImage={img_01}
      strength={700}
      bgImageStyle={{ minHeight: '100vh' }}
    >
      <div className='content'>
        <span className='img-txt'> hello, world</span>
      </div>
    </Parallax>

  </div>
);
  };

export default ImageOne;
