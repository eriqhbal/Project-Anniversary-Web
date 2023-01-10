import Carousel from 'react-bootstrap/Carousel';

// Import Image
import awalTahun from '../Assets/images/gambar_2018.jpg';
import tengahTahun from '../Assets/images/gambar_2019.jpg';
import akhirTahun from '../Assets/images/gambar_2022.jpg';

function Moment() {
  return (
    <div className='bg-pink-300 p-4'>
      <h2 className='text-center font-bold text-xl mb-2 text-gray-800'>The Best Memory</h2>
    <Carousel fade >
      <Carousel.Item>
        <img className="d-block w-1/2 h-1/2 mx-auto brightness-50 rounded-lg" src={awalTahun} alt="First slide"/>
        <Carousel.Caption>
          <h3>Our First Photo</h3>
          <p>We Took this photo at event indonesian independence 2018 </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="d-block w-1/2 h-1/2 mx-auto brightness-50 rounded-lg"
          src={tengahTahun}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>The Best Memory</h3>
          <p>the first our trip in north sumatra.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="d-block w-1/2 h-1/2 mx-auto brightness-50 rounded-lg"
          src={akhirTahun}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>School Farewell</h3>
          <p>
            we were travelling when Farewell High School.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Moment;