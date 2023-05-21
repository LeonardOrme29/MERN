import '../estilos/craft.css'
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import Colors from '../components/ColorsPalete'
import MensajeFlotante from '../components/MensajeFlotante';


function Craft() {
  const [inputValue, setInputValue] = useState();
  const [text, setText] = useState("0.00");
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  function handleInputChange(event) {
    event.preventDefault()
    setInputValue(event.target.value)
  }
  const CambiarValores=(heigth,width)=> {
    const inputAlto=document.getElementById('alto')
    const inputAncho=document.getElementById('ancho')
    inputAlto.value=heigth;
    inputAncho.value=width;
  }
  return (
    <div>
        <div className='container-xl d-flex flex-row'>
             <div className='craftContainer col-8 d-flex flex-column align-items-center'> 
              <form onSubmit={handleSubmit}>
              <div className='firstContainer d-flex flex-row justify-content-between'>
                <div className='frameType Box d-flex flex-row align-items-center'>
                  <p>Tipo de marco:</p>
                    <select>
                      <option disabled selected>Seleccionar</option>
                      <option>Cuadro Plano</option>
                      <option>Cuadro Box</option>
                      <option>Doble Vidrio</option>
                      <option>Doble Marco</option>
                      <option>Canvas?</option>
                    </select>
                </div>
                <div className='frameDepth Box d-flex flex-row align-items-center'>
                  <p>Profundidad del marco:</p>
                    <select>
                      <option disabled selected>Seleccionar</option>
                      <option>2 cm</option>
                      <option>2.5 cm</option>
                      <option>3 cm</option>
                      <option>4 cm</option>
                      <option>4.5 cm</option>
                    </select>
                </div>
              </div>
              <div className='secondContainer d-flex flex-row justify-content-between'>
                <div className='frameSizeBox d-flex flex-column'>
                  <div className='sizeContainer d-flex flex-row'>
                    <div className='frameSize d-flex flex-column'>
                      <p className='tittle'>Tamaño del Arte</p>
                      <div className='d-flex sizeBox'>
                        <div className='d-flex flex-column'>
                          <p>Altura</p>
                          <div className='d-flex'>
                            <input className='heigthFrame' id='alto' name='alto' type='number' step="any" min='0' max='300' required></input>
                            <p>cm</p>
                          </div>
                        </div>
                        <div className='d-flex flex-column'>
                          <p>Ancho</p>
                          <div className='d-flex'>
                            <input className='widthFrame'  id='ancho' name='ancho' type='number' step="any" min='0' max='300' required></input>
                            <p>cm</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='artSize'>
                      <p>Tamaños Predeterminados</p>
                      <div className='standarSize'>
                        <button className='btn btn-info' onClick={()=>{CambiarValores(15,10)}}>Jumbo</button>
                        <button className='btn btn-info' onClick={()=>{CambiarValores(29.7,21)}}>A4</button>
                        <button className='btn btn-info' onClick={()=>{CambiarValores(42,29.7)}}>A3</button>
                        <button className='btn btn-info' onClick={()=>{CambiarValores(59.4,42)}}>A2</button>
                      </div>
                    </div>
                  </div>
                  <div className='infoSize'>
                    <p>Info</p>
                  </div>
                </div>
                <div className='frameColor Box d-flex flex-column'>
                  <p>Color del cuadro</p>
                  <div className='colorsContainer'><Colors/></div>
                </div>
              </div>
              <div className='thirdContainer d-flex flex-row'>
                <div className='frameExtra Box d-flex flex-column '>
                  <p>Adicionales</p>
                  <div className='checkExtra d-flex align-items-center'><input type='checkbox'/><label>Paspartú</label></div>
                  <div className='checkExtra d-flex align-items-center'>
                    <input type='checkbox'/>
                    <label>Acrilico Transparente</label>
                    <i id='popInfoAcrilico' class="bi bi-info-circle">
                      <div className='messagePop'>
                        <MensajeFlotante text={'Se remplaza el vidrio del cuadro por el acrílico'}/>
                      </div>
                    </i>
                  </div>
                  <div className='checkExtra d-flex align-items-center'><input type='checkbox'/><label>Listo para colgar</label></div>
                </div>
                <div className='frameDesc Box'>
                  <p>Descripcion del cuadro</p>
                </div>
              </div>
              </form>
            </div>
            <div className='imagen col-4 d-flex flex-column align-items-center'>
              <div className='imgFrame'>
              </div>
              <div className='priceFrame'>
                <div className='d-flex flex-row'>
                  <p style={{color:'white'}}>Precio:$</p>
                  <p id='changePrice' style={{color:'white'}}>{text}</p>
                </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Craft