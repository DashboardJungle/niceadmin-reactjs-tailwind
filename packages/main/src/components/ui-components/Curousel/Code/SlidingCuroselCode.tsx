import { Carousel } from 'flowbite-react';
import blog1 from '/src/assets/images/blog/blog-img1.jpg';
import blog2 from '/src/assets/images/blog/blog-img2.jpg';
import blog3 from '/src/assets/images/blog/blog-img3.jpg';
import blog4 from '/src/assets/images/blog/blog-img4.jpg';
import blog5 from '/src/assets/images/blog/blog-img5.jpg';

const SlidingCuroselCode = () => {
  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 overflow-hidden">
        <Carousel slideInterval={5000}>
          <img src={blog1} alt="..." />
          <img src={blog2} alt="..." />
          <img src={blog3} alt="..." />
          <img src={blog4} alt="..." />
          <img src={blog5} alt="..." />
        </Carousel>
      </div>
    </div>
  );
};

export default SlidingCuroselCode;
