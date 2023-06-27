import { Parallax } from 'react-parallax';
import img_04 from '../img/space_img04.jpg';

const ImageFour = () => (
  <Parallax className='image' bgImage={img_04} strength={800}>
    <div className='content'>
      <span className='img-txt'> hello, world</span>
    </div>
  </Parallax>
);

export default ImageFour;