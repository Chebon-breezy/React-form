import React, {useState} from "react";

export const Register = (props) => {
    
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
      
      e.preventDefault();  
      console.log(email);
    }

    return (
      <div className="auth-form-container"> 
     
        <form className="register-form" onSubmit={handleSubmit}>
            <h2>Register Form</h2>

            <label htmlFor="name">Full Name</label>
            <input type={name} name="name" id="name" placeholder="Full Name"/>
            <label htmlFor="email">email</label> 
            <input value={email} onChange={(e) => setEmail(e.target.value)}  type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label> 
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>

        <button className="link-btn" onClick={() => props.onFormSwitch('login')} >Already have an Account? Login here.</button>
        </div>   
    )
}