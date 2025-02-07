import {  useState } from 'react';
import './css/housing.css';
import one from './images/one.jpg';
import two from './images/two.jpg';

const Housing = () => {
  const [state, setState] = useState({
    isFadingOut: false,
    isFadingOut2: false,
    isDeleted: true,
    isDeleted2: true,
    show: false,
    show2: false,
  });

  const handleDelete = () => {
    setState((prev) => ({ ...prev, isFadingOut: true }));
    setTimeout(() => {
      setState((prev) => ({ ...prev, isDeleted: false, show: true }));
    }, 500);
  };

  const handleDelete2 = () => {
    setState((prev) => ({ ...prev, isFadingOut2: true }));
    setTimeout(() => {
      setState((prev) => ({ ...prev, isDeleted2: false, show2: true }));
    }, 500);
  };

  return (  
    <div className="housing-container">
      <div className="housing-box">
        {state.isDeleted && (
          <div className={`option ${state.isFadingOut ? 'fade-out' : ''}`} onClick={handleDelete2}>
            <span className='image-holder'><img src={one} alt="" /></span>
            <span className='text-holder'>
              <h2>تقديم طلب جديد</h2>
            </span>
          </div>
        )}
        {state.show2 && (
          <div className="new-form">
            <form className='form-2'>
              <h3>تقديم طلب جديد</h3>
              <input dir='rtl' type="text" placeholder='الاسم الرباعي' />
              <select>
                <option value="" disabled selected>اختر السنة الدراسية</option>
                <option value="">الاولى</option>
                <option value="">الثانية</option>
                <option value="">الثالثة</option>
                <option value="">الرابعة</option>
              </select>
              <input  type="text" placeholder='ادخل رقم الهاتف'/>
              <button>تقديم</button>
            </form>
          </div>
        )}
        {state.show && (
          <div className="check">
            <form className='form-1'>
              <h3>ادخل رقم الطلب</h3>
              <input type="text" />
              <button>تحقق</button>
            </form>
          </div>
        )}
        {state.isDeleted2 && (
          <div className={`option ${state.isFadingOut2 ? 'fade-out2' : ''}`} onClick={handleDelete}>
            <span className='image-holder'><img src={two} alt="" /></span>
            <span className='text-holder'>
              <h2>الاستعلام عن طلب</h2>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Housing;
