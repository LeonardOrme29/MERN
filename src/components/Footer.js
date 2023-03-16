import React from 'react'
import '../estilos/footer.css'

function Footer (){
  return (
    <div className='container-xll'>
      <div className='space px-4 '></div>
      <div className='mainContainerFooter d-flex flex-row justify-content-between align-items-center px-4'>
        <div className='contactContainer d-flex flex-column'>
          <p className='footerTitulo'>Contáctanos</p>
          <p>TAAL Creations & Art</p>
          <p>Lima</p>
          <p>Perú</p>
          <p>taalcreationsandart@gmail.com</p>
        </div>
        <div className='contactContainer d-flex flex-column'>
          <p className='footerTitulo'>Información</p>
          <p>Política de privacidad</p>
          <p>Política de devoluciones</p>
          <p>Política de envíos</p>
          <p>Términos de servicio</p>
        </div>
        <div className='contactContainer d-flex flex-column'>
          <p className='footerTitulo'>Acerca de TAAL</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Tik Tok</p>
          <p>Correo</p>
        </div>
      </div>
      <div className='space px-4 d-flex justify-content-end align-items-center'>
        <p>©2023 TAAL Creations & Art</p>
      </div>
    </div>
  )
}

export default Footer