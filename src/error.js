import './css/Error404.css'
import error from './images/error.png'

const Error404 = () => {
  return ( 
    <div className="Error-container">
      <div className="Error-box">
        <h2> عفواً.... هذه الصفحة غير موجودة</h2>
        <img src={error} alt="" />
      </div>
    </div>
   );
}
 
export default Error404;