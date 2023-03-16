import React from 'react';
import logo from '../images/logoRow.png'

const Header = () => {
  return (
    <>
    <header className='header-top-strip py-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-2 d-flex align-items-center justify-content-center'>
            <a href='/'>
              <img className='logo img-fluid' alt='logoTaal' src={logo}/>
            </a>
            </div>
            <div className='nav col-6 d-inline-flex flex-row align-items-center'>
              <a className='nav-item d-inline-block' href='/'>A Medida</a>
              <a className='nav-item d-inline-block'href='/'>Galería</a>
              <a className='nav-item d-inline-block'href='/'>Regalos</a>
              <a className='nav-item d-inline-block'href='/coleccion'>Colecciones</a>
              <a className='nav-item d-inline-block'href='/'>Inspiración</a>
            </div>
            <div className='col-4 d-flex align-items-center justify-content-end'>
              <input className='busqueda' type='text' placeholder='Buscar'></input>
              <div className='searchIcon row ms-2 me-1'>
                <i class="bi bi-search"></i>
              </div>
              <div className='cartIcon row ms-1 me-2'>
                <i class="bi bi-cart"></i>
              </div>
              <div className='userIcon row ms-1 me-2'>
                <i className='user bi bi-person-circle'/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header