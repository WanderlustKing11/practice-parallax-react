import { Parallax } from 'react-parallax';
import img_05 from '../img/space_img05.jpg';

const ImageFive = () => (
  <Parallax className='image' bgImage={img_05} strength={800}>-300
    <div className='content'>
      <span className='img-txt'> hello, world</span>
    </div>
  </Parallax>
);

export default ImageFive;