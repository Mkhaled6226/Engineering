import './css/form.css'

const Form = () => {
  return (
    <div className="container">
      <div class="form-wrapper">
        <h2 dir='rtl' style={{textAlign:'center'}}>تسجيل دخول</h2>
        <form action="#">
            <div class="form-control">
                <input type="text" required/>
                <label className='first-label' >البريد الجامعي أو اسم المستخدم</label>
            </div>
            <div class="form-control">
                <input type="password" required/>
                <label className='second-label' >كلمة السر</label>
            </div>
            <button type="submit">تسجيل</button>
            <div class="form-help"> 
                <div class="remember-me">
                    <input type="checkbox" id="remember-me"/>
                    <label for="remember-me">تذكرني</label>
                </div>
                <a href="/">تحتاج مساعدة؟</a>
            </div>
        </form>
        <p>مستخدم جديد ؟ <a href="/">سجل الآن</a></p>
        <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot. 
            <a href="/">Learn more.</a>
        </small>
    </div>
    </div>
    );
}
export default Form;