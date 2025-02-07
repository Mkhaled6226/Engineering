import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './css/inquiry.css'
import inquiry from './images/file2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Inquiry = () => {
  return ( 
    <div className="inquiry-container">
          <div className="inquiry-box">
          <div className="text">
        <h2 dir='rtl' >يمكنك التواصل مع مكتب شئون الطلاب من خلال هذه الوسائل :</h2>
        <p><FontAwesomeIcon icon={faPhone} /> 012345678912 </p>
        <p><FontAwesomeIcon icon={faPhone} /> 08612544465</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> StudentAffair@mu.edu.eg</p>
      </div>
      <img className='files' src={inquiry} alt="" />
    </div>
    </div>
);
}

export default Inquiry;