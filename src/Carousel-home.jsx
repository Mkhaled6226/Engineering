import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './css/carousel.css'



import one from './images/a-min.jpg';
import two from './images/power-min.jpg';
import three from './images/s.jpg';
import four from './images/ai.jpg';
import five from './images/green.jpg'
import faculty from './images/back.jpg';
import minia from './images/minia.jpg';




const Carousel = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 5000, 
  };

  return (
    <div className="Carousel">
      <Slider {...settings}>
      <div className="slide">
          <img src={minia} alt="Imagea 0" style={{ width: "100%" }} />
          <h2>كلية الهندسة بجامعة المنيا : دليل شامل للطلاب الجدد </h2>
        </div>
        <div className="slide">
          <img src={one} alt="Imagea 1" style={{ width: "100%" }} />
          <h2>العمارة الفارسية : فنون وتكنولوجيا من الماضي</h2>
        </div>
        <div className="slide">
          {/* <h1>Zamalek advance to 8th round</h1> */}
          <img src={two} alt="Imagea 2" style={{ width: "100%" }} />
          <h2>اليورانيوم : هل هو الحل لمشاكل الطاقة في العالم؟</h2>
        </div>
        <div className="slide">
          <img src={three} alt="Imagea 3" style={{ width: "100%" }} />
          <h2> تيسلا : بين أواخر القرن التاسع عشر وأوائل القرن العشرين </h2>
        </div>
        <div className="slide">
          <img src={four} alt="Imagea 4" style={{ width: "100%" }} />
          <h2 dir="rtl"> الذكاء الإصطناعي : نموذج R1 من DeepSeek </h2>
        </div>
        <div className="slide">
          <img src={five} alt="Imagea 5" style={{ width: "100%" }} />
          <h2 dir="rtl" lang="ar"> إتفاقية باريس : هل تنجح في تحقيق أهدافها الطموحة؟</h2>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
