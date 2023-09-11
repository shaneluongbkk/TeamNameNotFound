import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import './Styles/App.scss'
import React from 'react'
import RegisterPage from './Pages/Registration/RegistrationPage';
import LoginPage from './Pages/Login/login-page';
import MainPage from './Pages/MainPage/main-page';
import ResearchPage from "./Pages/Research/ResearchPage";
import ChangePasswordPage from './Pages/ChangePasswordPage/changepassword-page';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/forgotpassword-page';
import LogoutPage from './Pages/LogoutPage/logout-page';
import ResetPasswordPage from './Pages/ResetPasswordPage/resetpassword-page';

function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/main' element={<MainPage />}/>
          <Route path='/research' element={<ResearchPage />}/>
          <Route path='/change' element={<ChangePasswordPage />}/>
          <Route path='/logout' element={<LogoutPage />}/>
          <Route path='/forgot' element={<ForgotPasswordPage />}/>
          <Route path='/reset' element={<ResetPasswordPage />}/>
      </Routes>
    </Router>

  )
}

export default App;
