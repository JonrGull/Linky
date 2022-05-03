import React from "react";

export default function login({ handleSubmit, renderError }){
    
return (
    <div className="login">
        <label>Login</label>
        <form>
            <label> Username </label>
            <input type="text" className="details" name="uname" placeholder="Username" />
            {renderError("uname")}
            <label> Password </label>
            <input type="password" className="details" name="pass" placeholder="************" />
            {renderError("pass")}
            <button className="login-button" onClick={handleSubmit}>Log In</button>
        </form>
    </div>
)
}

