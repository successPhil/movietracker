import SignIn from "../muiComponents/SignIn"
import { login, signup } from "../api/authApi"


export default function Login({handleInputChange, formData, handleToken, handleOnClick, checked}) {
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (checked) {
            const data = new FormData(event.currentTarget);
            const context = {
                username: data.get('username'),
                password: data.get('password'),
              }
              signup(context)
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
    return (
        <div className="route-text">
        <SignIn handleSubmit={handleSubmit} handleInputChange={handleInputChange} formData={formData} handleToken={handleToken} handleOnClick={handleOnClick}/>
        </div>
    )
}