import { useState } from 'react';
import './css/housing.css';
import one from './images/one.jpg';
import two from './images/two.jpg';

const Housing = () => {
  // const [showSecondOption, setShowSecondOption] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFadingOut2, setIsFadingOut2] = useState(false);
  const [isDeleted, setIsDeleted] = useState(true);
  const [isDeleted2, setIsDeleted2] = useState(true);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleDelete = () => {
    setIsFadingOut(true); // Start fade-out effect
    setTimeout(() => {
      setIsDeleted(false);
      setShow(true);
      // Remove element from the DOM after animation
    }, 500); // Match timeout duration to CSS transition duration
  };

  const handleDelete2 = () => {
    setIsFadingOut2(true); // Start fade-out effect
    setTimeout(() => {
      setIsDeleted2(false); 
      setShow2(true);// Remove element from the DOM after animation
    }, 500); // Match timeout duration to CSS transition duration
  };


  return (  
    <div className="housing-container">
      <div className="housing-box">
        {isDeleted && (
                  <div className={`option ${isFadingOut ? 'fade-out' : ''}`} onClick={handleDelete2}>
                  <span className='image-holder'><img src={one} alt="" /></span>
                  <span className='text-holder'>
                    <h2>تقديم طلب جديد</h2>
                  </span>
                </div>
        )}
        {show2 && (
          <div className="new-form">
            <form className='form-2'>
              <h3>تقديم طلب جديد</h3>
              <input type="text" name="" id="" placeholder='الاسم الرباعي' />
              <select name="" id="" placeholder="">
                <option value="" disabled selected>اختر السنة الدراسية</option>
                <option value="">الاولى</option>
                <option value="">الثانية</option>
                <option value="">الثالثة</option>
                <option value="">الرابعة</option>
              </select>
              <input type="text" name="" id=""  placeholder='ادخل رقم الهاتف'/>
              <button>تقديم</button>
            </form>
          </div>
        )}
        {show && (
          <div className="check">
            <form className='form-1'>
              <h3>ادخل رقم الطلب</h3>
              <input type="text" />
              <button>تحقق</button>
            </form>
          </div>
        )}
        {isDeleted2 && (
                  <div className={`option ${isFadingOut2 ? 'fade-out2' : ""}`} onClick={handleDelete}>
                  <span className='image-holder'><img src={two} alt="" /></span>
                  <span className='text-holder'>
                    <h2>الاستعلام عن طلب</h2>
                  </span>
              </div>
        )}
        
      </div>
    </div>
  );
}

export default Housing;
