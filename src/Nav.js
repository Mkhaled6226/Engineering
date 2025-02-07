import { Link } from "react-router-dom";
import logo from './images/minia5.png'
import './css/nav.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons';


const www = () =>{
  const link = document.querySelector('.house')
  link.click()
}

const www2 = () =>{
  const link = document.querySelector('.inquiry')
  link.click()
}

const Nav = () => {
  return ( 
        <nav className="nav" id="navbar">
                    <div className="links" dir="rtl">
            <Link dir="rtl" className="dep" to="/departments"> <span>الأقسام</span></Link>
            <Link dir="rtl"className="inquiry" to="/inquiry"><span>شئون الطلاب</span></Link>
            <Link dir="rtl"className="house" to="/housing"><span>المدينة الجامعية</span></Link>
            <Link dir="rtl"className="last-link" to="/sign-in"><span>تسجيل دخول</span>  &nbsp;</Link>
            <FontAwesomeIcon className="bars" icon={faBars} onClick={www} onDoubleClick={www2} />
          </div>
          <Link className="logo" to="/"><img src={logo} alt="" /></Link>
          <Link className="logo-link" to='/' id="nav">
            <div className="logo-box">
              <h1>كلية الهندسة - جامعة المنيا</h1>
            </div>
          </Link>
        </nav>
);
}

export default Nav;