import { useState } from 'react';
import './css/departments.css';

const UseStat = () => {
const [info, setInfo] = useState(""); // State to store hovered content

return ( 
<div className="box">
        <div className="cards">
            {["الهندسة المدنية", "الهندسة الكيمائية", "الهندسة المعمارية", "هندسة ميكانيكا الطاقة", "هندسة الميكاترونيات والروبوتات الصناعية", 
            "الهندسة الكهربية", "الهندسة الطبية", "هندسة البيتروكيماويات", "هندسة الانتاج والتصميم", "هندسة الحاسبات "].map((item, index) => (
                <div key={index} className="card"onMouseEnter={() => setInfo(item)}>{item}</div>
            ))}
        </div>
        <div className="info">{info}</div>
</div>
);
}

export default UseStat;
