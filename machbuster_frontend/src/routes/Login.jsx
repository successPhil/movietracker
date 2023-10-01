import SignIn from "../muiComponents/SignIn"
import { login, signup } from "../api/authApi"
import { Navigate } from 'react-router-dom';



export default function Login({handleInputChange, formData, handleToken, handleOnClick, checked, token, handleCheckboxChange}) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (checked) {
            const data = new FormData(event.currentTarget);
            const context = {
                username: data.get('username'),
                password: data.get('password'),
              }
              signup(context)
              console.log(checked, "from Login")
              handleCheckboxChange(checked)
        } else {
            const data = new FormData(event.currentTarget);
            const context = {
                username: data.get('username'),
                password: data.get('password'),
              }
              const tokenData = await login(context)
            handleToken(tokenData)
            
        }
      };

      

      if (token) {
        return <Navigate to="/movies" />;
      }
    
      return (
        <div className="route-text">
        <SignIn handleSubmit={handleSubmit} handleInputChange={handleInputChange} formData={formData} handleToken={handleToken} handleOnClick={handleOnClick} checked={checked}/>
        </div>
    )
}