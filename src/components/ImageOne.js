import { Parallax } from 'react-parallax';
import { useEffect } from 'react';
import { throttle } from 'lodash';
// import LazyLoad from 'react-lazyload';
import img_01 from '../img/space_img01.jpg';

const ImageOne = () => {
  useEffect(() => {
    const handleScroll = throttle (() => {

    }, 200);

    window.addEventListener('scroll', handleScroll);

    return() => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // <LazyLoad height={200} offset={100}>
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
  // </LazyLoad>
);
  };

export default ImageOne;
