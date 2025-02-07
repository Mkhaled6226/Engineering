import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav';
import Form from './form';
import Departments from './departments';
import Inquiry from './inquiry';
import Housing from './housing';
import Navbar from "./components/Navbar";
import Error404 from './error';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/sign-in" element={<Form/>}/>
            <Route exact path="/departments" element={<Departments/>}/>
            <Route exact path="/inquiry" element={<Inquiry/>}/>
            <Route exact path="/housing" element={<Housing/>}/>
            <Route exact path="/*" element={<Error404/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
