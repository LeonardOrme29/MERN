import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'
import '../estilos/signup.css'

function Signup() {
    const [correo,setCorreo]=useState('');
    const [password,setPassword]=useState('');
    const [nombre,setNombre]=useState('');
    const [appelido,setApellido]=useState('');
    async function submit(e){
        e.preventDefault();
        try {
          await axios.post('http://localhost:3001/user/signup',{
            correo,password,nombre,appelido
          })
          .then(res=>{
            if(res.data==='user exist'){
              //go to login
              alert('el usuario existe');
            }else if(res.data==='user signed'){
              alert('se ha registrado al usuario')
            }
          })
        } catch (error) {
          console.log(error);
        }
    }
    return (
      <div className='py-5' style={{padding:'300px'}}>
        <div className='container-xl d-flex justify-content-center'>
          <div className='signup-container d-flex flex-column justify-content-center'>
            <h2 className="mb-3">SIGN UP!</h2>
            <form action='POST'>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nombres</label>
                    <input type='email' className='form-control' aria-describedby="emailHelp" onChange={(e)=>{setNombre(e.target.value)}} placeholder='Nombres'/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Apellidos</label>
                    <input type='email' className='form-control' aria-describedby="emailHelp" onChange={(e)=>{setApellido(e.target.value)}} placeholder='Apellidos'/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type='email' className='form-control' aria-describedby="emailHelp" onChange={(e)=>{setCorreo(e.target.value)}} placeholder='Correo Electronico'/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type='password' className="form-control" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Contraseña'/>
                    <div id="emailHelp" className="form-text">No compartan tu contraseña con nadie.</div>

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type='password' className="form-control" placeholder='Contraseña'/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <a class="form-check-label" for="exampleCheck1" href='/'>Terminos y condiciones</a>
                </div>
                <button type="submit" onClick={submit} class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className='img-signup ms-3' style={{height:'600px',width:'70%', background:'pink',borderRadius:'10px'}}>
            <div></div>
            {/* <img className='' src={} alt='signup' /> */}
          </div>
        </div>
      </div>
    )
}

export default Signup