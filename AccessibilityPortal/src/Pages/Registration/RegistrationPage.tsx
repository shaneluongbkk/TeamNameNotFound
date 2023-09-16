import React from 'react';
import BasicButtonComponent from "../../CommonComponents/Buttons/BasicButtonComponent"; 
import AccessibilityMenu from "../../CommonComponents/AccessibilityMenu/AccessibilityMenuComponent";
import {useNavigate} from "react-router-dom";
import '../../Styles/registration.scss';

function RegistrationPage() {
  const navigate = useNavigate();

  const directToLoginPage = () => {
    navigate('/login');
  };

  const directToMainPage = () => {
    navigate('/main');
  };
  
  
  return (
    <div className="registration-page">
      <div className="text-center">
        <h2>Welcome</h2>
        <h5>Register to create your account</h5>
      </div>

      <div className="registration-body">
      <h5 className="text-center">
          Select type of your account
        </h5>

        <div className="radio-button">
          <input type="radio" id="researcher" value="researcher" name="role"/>
          <label htmlFor="researcher">Researcher</label>
          <span className="btn-right-space"></span>
          <input type="radio" id="participant" value="participant" name="role"/>
          <label htmlFor="participant">Participant</label>
        </div>

        <label>First Name</label>
        <input></input>
        <label>Last Name</label>
        <input></input>
        <label>Date of Birth</label>
        <input></input>
        <label>Email Address</label>
        <input></input>

        <label>Password</label>
        <input></input>
        <label>Confirm Password</label>
        <input></input>
        <div style={{marginTop: "20px"}} className="text-end">
        <BasicButtonComponent title={"Cancel"} onClick={directToLoginPage}></BasicButtonComponent>
        <span className="btn-right-space"></span>
        <BasicButtonComponent title={"Register"} onClick={directToMainPage}></BasicButtonComponent>
        </div>
      </div>

      <AccessibilityMenu />
    </div>
  );
}
export default RegistrationPage;
