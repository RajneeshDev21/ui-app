import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import ReducerV from './components/Preferences/ReducerV'; 
import useToken from './components/util/useToken';
import FileUpload from './components/FileUpload/FileUpload';
import LoginV2 from './components/Login/LoginV2';
 
function App() {

  const { token, setToken } = useToken();

  // if(!token) {
  //   return <LoginV1 setToken={setToken} />
  // }

  return (
    <>
      <div className="wrapper">
      <div className='d-flex justify-content-end'>
        <button type="reset" onClick={()=>setToken(null)}>logout</button> 
     </div>
        <BrowserRouter>
          <Routes>
             <Route exact path="/" element={<LoginV2/>}  /> 
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/reducerV" element={<ReducerV />} /> 
            <Route exact path="/fileUpload" element={<FileUpload />} /> 
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
