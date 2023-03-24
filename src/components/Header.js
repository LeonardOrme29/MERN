import React from 'react';
import logo from '../images/logoRow.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const authState=useSelector(state=>state.auth)
  let usuario;
  if(authState.user!=null){
    usuario=authState.user;
  }
  return (
    <>
    <header className='header-top-strip py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-2 d-flex align-items-center justify-content-center'>
              <Link to={'/'}>
                <img className='logo img-fluid' alt='logoTaal' src={logo}/>
              </Link>
            </div>
            <div className='nav col-6 d-inline-flex flex-row align-items-center'>
              <Link className='nav-item d-inline-block' to={'/'}>A Medida</Link>
              <Link className='nav-item d-inline-block' to={'/'}>Galería</Link>
              <Link className='nav-item d-inline-block' to={'/'}>Regalos</Link>
              <Link className='nav-item d-inline-block' to={'/coleccion'}>Colecciones</Link>
              <Link className='nav-item d-inline-block' to={'/'}>Inspiración</Link> 
            </div>
            <div className='col-4 d-flex align-items-center justify-content-end'>
              <input className='busqueda' type='text' placeholder='Buscar'></input>
              <div className='searchIcon row ms-2 me-1'>
                <i class="bi bi-search"></i>
              </div>
              <div className='cartIcon row ms-1 me-2'>
                <i class="bi bi-cart"></i>
              </div>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className='user bi bi-person-circle img-responsive' alt="dropdown image" />
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link class="dropdown-item" to={'/'}>Settings</Link></li>
                  <li><Link class="dropdown-item" to={'/'}>Log Out</Link></li>
                  <li><Link class="dropdown-item" to={'/'}>menu3</Link></li>
                </ul>
              </div>
              {
                usuario!=null && 
                <div>
                  <p>Hola {usuario.nombre}</p>
                </div>
              }
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header