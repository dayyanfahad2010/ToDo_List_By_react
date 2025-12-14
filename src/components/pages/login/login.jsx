import React,{useState} from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import '../Signup/Signuplogin.css'
import email from '../../assets/email.png'
import password from '../../assets/password.png'

export const Login = () => {
    const [input,setInput]=useState({
        email:"",
        password:""
    });
    const navigate =useNavigate();
    let [isCredents,setIsCredents] = useState(false);
    let [userFound,setUserFound] = useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
        let Users=JSON.parse(localStorage.getItem('users')) || [];
        Users.forEach((element,index) => {
            if(input.email === element.email && input.password === element.password){
                setIsCredents(true)  
                localStorage.setItem("loggedin",index)
                localStorage.setItem("loggedUser",JSON.stringify(element));              
            }
            else if(input.email === element.email){
                setUserFound(true)
            }
        });
        if(isCredents){
            alert("login Successfully")
            navigate("/")
        }
        else if(!userFound){
            alert("User Not Found")
        }
        else{
            alert("Incorrect email or password")
            console.log(userFound);
            
        }
    }
    return (
    <div className='container'>
        <div className="main-div">
            <h1>Login</h1>
            <div className="inputs">
                <div className="input">
                    <img src={email} alt="" />
                    <input type="email" placeholder='Email'
                    name='email' 
                    value={input.email} 
                    onChange={(e)=>
                        setInput({
                            ...input
                            ,[e.target.name]:e.target.value
                        })
                    }/>
                </div>
                <div className="input">
                    <img src={password} alt="" />
                    <input type="password" placeholder='Password'
                    name='password' 
                    value={input.password} 
                    onChange={(e)=>
                        setInput({
                            ...input
                            ,[e.target.name]:e.target.value
                        })
                    }/>
                </div>
                <Link to={"/signup"}>Don't have an account</Link>
                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    </div>
  )
}
