import React from 'react'
import cuadro from '../images/cuadro-banner1.png'

function Colecciones() {
  return (
    <div>
        <div className='container-xl d-flex flex-column'>
            <div class="card" style={{width:'18rem;'}}>
                <img class="card-img-top" src={cuadro} alt='img'/>
                <div class="card-body">
                    <h5 class="card-title">Coleccion nro1</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">Quiero comprarlo</a>
                </div>
            </div>
            <div class="card" style={{width:'18rem;'}}>
                <img class="card-img-top" src={cuadro} alt='img'/>
                <div class="card-body">
                    <h5 class="card-title">Coleccion nro1</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" class="btn btn-primary">Quiero comprarlo</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Colecciones