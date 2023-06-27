import { Parallax } from 'react-parallax';
import img_03 from '../img/space_img03.jpg';

const ImageThree = () => (
  <Parallax className='image' bgImage={img_03} strength={700}>
    <div className='content'>
      <span className='img-txt'> hello, world</span>
    </div>
  </Parallax>
);

export default ImageThree;