import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'

function Login() {
    const history=useNavigate();
    const [correo,setCorreo]=useState('');
    const [password,setPassword]=useState('');

    async function submit(e){
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/user/login',{
                correo,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert('SE LOGRO ACCEDER AL USUARIO')
                }else if(res.data==='not exist'){
                    alert('NO EXISTE EL USUARIO')
                }
            })
            .catch(e =>{
                console.log(e);
                alert('datos incongruentes')
            })
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <div className='container-xl login-container'>
                <h2>LOGIN</h2>
                <form action='POST'>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type='email' className='form-control' aria-describedby="emailHelp" onChange={(e)=>{setCorreo(e.target.value)}} placeholder='Correo Electronico'/>
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type='password' className="form-control" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Contraseña'/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" onClick={submit} class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login