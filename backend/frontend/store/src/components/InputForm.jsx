import axios from "axios";
import { useState } from "react";

function InputForm(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [firstName, setFName] = useState('');
    const [lastName, setLName] = useState('');
    const [err, setErr] = useState('');
    
    const handleSubmit =  async (e) => {
        e.preventDefault();
        let userData;
        if (isSignUp){
             userData = {
                firstName,
            lastName,
            email,
            password,
            
        };
        }
        else userData = { email, password };
        let endpoint = isSignUp ? '/register' : '/login';
        await axios.post(`http://localhost:5000/user${endpoint}`, userData)
            .then(response => {
                
                console.log("Form submitted successfully");
                setErr('');
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
            })
            .catch(error => {
                setErr(error.response.data.error);
                console.error("Error submitting form:", error);
            });
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            
        
        {isSignUp && (
                        <div className="mb-3">
                            <div className="fname">
                                <label htmlFor="exampleInputFName" className="form-label">First Name</label>
                                <input value={firstName} onChange={(e) => setFName(e.target.value)} type="text" className="form-control" id="exampleInputFName" name="fname" />
                            </div>
                            <div className="lname">
                                <label htmlFor="exampleInputLName" className="form-label">Last Name</label>
                                <input value={lastName} onChange={(e) => setLName(e.target.value)} type="text" className="form-control" id="exampleInputLName" name="lname" />
                            </div>
                        </div>
                    )}
        <div className="input-form">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword" />
            </div>
            <button type="submit" className="btn btn-primary">{isSignUp ? 'Sign Up' : 'Login'}</button>
        </div>
            <p onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? 'Already have an account?' : "Don't have an account?"}</p>
        {err ? <div className="error message-danger">{err}</div> : <div className="error message-success">Form submitted successfully!</div>}
        </form>
        </>
    )
}

export default InputForm;