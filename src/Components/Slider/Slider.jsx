
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import banner1 from '../../Images/banner 02.webp';
import banner2 from '../../Images/banner 2.jpg';
import banner3 from '../../Images/banner 3.jpg';


export default function App() {
  return (
    <MDBCarousel showControls>
      <MDBCarouselItem
        className='w-100 d-block setheight'
        itemId={1}
        src={banner1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block setheight'
        itemId={2}
        src={banner2}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block setheight'
        itemId={3}
        src={banner3}
        alt='...'
      />
    </MDBCarousel>
  );
}