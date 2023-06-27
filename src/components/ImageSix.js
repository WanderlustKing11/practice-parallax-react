import { Parallax } from 'react-parallax';
import img_06 from '../img/space_img06.jpg';

const ImageSix = () => (
  <Parallax className='image' bgImage={img_06} strength={800}>
    <div className='content'>
      <span className='img-txt'> hello, world</span>
    </div>
  </Parallax>
);

export default ImageSix;