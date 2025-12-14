import React,{useState} from 'react';
import { useNavigate ,Link} from 'react-router-dom';
import './Signuplogin.css'
import person from '../../assets/person.png'
import email from '../../assets/email.png'
import password from '../../assets/password.png'

export const Signup = () => {
    let userarray=JSON.parse(localStorage.getItem('users')) || [];
    const navigate=useNavigate();
    const [input,setInput]=useState({
        name:"",
        email:"",
        password:"",
        task:[]
    });
    const handleSubmit=(e)=>{
        e.preventDefault();
        let userFound=0
        if(!input.name || !input.email || !input.password ){
            alert("please Fill all Fields")
        }
        else{
            userarray.forEach(element => {
                if(input.email ===element.email ){
                    alert("this email is already registered")
                    userFound+=1
                }
            });
            if(userFound===0){
                userarray.push(input)
                localStorage.setItem('users',JSON.stringify(userarray))
                navigate('/signin')
            }
        }
    }
    return (
    <div className='container'>
        <div className="main-div">
            <h1>SignUp</h1>
            <div className="inputs">
                <div className="input">
                    <img src={person} alt="" />
                    <input type="text" placeholder='Name' 
                    name='name' 
                    value={input.name} 
                    onChange={(e)=>
                        setInput({
                            ...input
                            ,[e.target.name]:e.target.value
                        })
                    } />
                </div>
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
                    <Link to={"/signin"}>Already have an account</Link>
            </div>
            <button onClick={handleSubmit}>Signup</button>
        </div>
    </div>
  )
}
