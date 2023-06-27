import { Parallax } from 'react-parallax';
import img_02 from '../img/space_img02.jpg';

const ImageTwo = () => (
  <Parallax 
    className='image'
    blur={0} 
    bgImage={img_02} 
    strength={700}
    bgImageStyle={{minHeight: '100vh'}}  
  >
      <div className='content'>
        <span className='img-txt'> hello, world</span>
      </div>
  </Parallax>
);

export default ImageTwo;