import React,{useState,useEffect} from 'react'
import ColorsPalete from '../components/ColorsPalete'
import styles from '../estilos/colores.module.css';
import MensajeFlotante from '../components/MensajeFlotante';
import {useDispatch} from 'react-redux'
import { build } from '../features/buildFrame/bulidFrameSlice';
import buildCuadro from '../components/build';
import '../estilos/craft.css'


function Craft() {
  const dispatch=useDispatch();
  const [price, setPrice] = useState("0.00");
  const [typeFrame, setTypeFrame]=useState('None');
  const [deepFrame, setDeepFrame]=useState('None');
  const [widthFrame,setWidthFrame]=useState(0);
  const [heightFrame,setHeightFrame]=useState(0);
  const [checkBox1,setCheckBox1]=useState(false);
  const [checkBox2,setCheckBox2]=useState(false);
  const [checkBox3,setCheckBox3]=useState(false);
  // paspartu
  const [widthPaspartu,setWidthPaspartu]=useState(0);
  const [heightPaspartu,setHeightPaspartu]=useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleChangeBox1=()=>{
    setCheckBox1(!checkBox1)
  }
  const handleChangeBox2=()=>{
    setCheckBox2(!checkBox2)
  }
  const handleChangeBox3=()=>{
    setCheckBox3(!checkBox3)
  }
  useEffect(() => {
    if (checkBox1) {
      dispatch(build({
        tipoC:typeFrame,
        profC:deepFrame,
        alturaC:heightFrame,
        anchoC:widthFrame,
        paspartu:checkBox1,
        alturaP:heightPaspartu,
        anchoP:widthPaspartu,
        acrilico:checkBox2,
        colgar:checkBox3
      }))
    }else{
      dispatch(build({
        tipoC:typeFrame,
        profC:deepFrame,
        alturaC:heightFrame,
        anchoC:widthFrame,
        paspartu:checkBox1,
        alturaP:0,
        anchoP:0,
        acrilico:checkBox2,
        colgar:checkBox3
      }))
    }
    
    setPrice(buildCuadro(heightFrame,widthFrame,typeFrame,checkBox1,heightPaspartu,widthPaspartu,checkBox2,checkBox3))
  }, [typeFrame,deepFrame,widthFrame,heightFrame,checkBox1,checkBox2,checkBox3,widthPaspartu,heightPaspartu])
  
  const CambiarValores=(heigth,width)=> {
    const inputAlto=document.getElementById('alto')
    const inputAncho=document.getElementById('ancho')
    inputAlto.value=heigth;
    inputAncho.value=width;
    setHeightFrame(heigth)
    setWidthFrame(width)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };
  return (
    <div>
        <div className='container-xl d-flex flex-row'>
             <div className='craftContainer col-8 d-flex flex-column align-items-center'> 
              <form onSubmit={handleSubmit}>
              <div className='firstContainer d-flex flex-row justify-content-between'>
                <div className='frameType Box d-flex flex-row align-items-center'>
                  <p>Tipo de marco:</p>
                    <select onChange={(event)=>{setTypeFrame(event.target.value)}}>
                      <option disabled selected>Seleccionar</option>
                      <option value='plano'>Cuadro Plano</option>
                      <option value='box'>Cuadro Box</option>
                      <option value='dVidrio'>Doble Vidrio</option>
                      <option value='dMarco'>Doble Marco</option>
                      <option value='canva'>Canvas?</option>
                    </select>
                </div>
                <div className='frameDepth Box d-flex flex-row align-items-center'>
                  <p>Profundidad del marco:</p>
                    <select onChange={(event)=>{setDeepFrame(event.target.value)}}>
                      <option disabled selected>Seleccionar</option>
                      <option value='2'>2 cm</option>
                      <option value='2.5'>2.5 cm</option>
                      <option value='3'>3 cm</option>
                      <option value='4'>4 cm</option>
                      <option value='4.5'>4.5 cm</option>
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
                            <input className='heigthFrame' id='alto' name='alto' type='number' step="any" min='0' max='300' required onChange={(e)=>{setHeightFrame(parseFloat(e.target.value))}} onKeyDown={handleKeyDown}></input>
                            <p>cm</p>
                          </div>
                        </div>
                        <div className='d-flex flex-column'>
                          <p>Ancho</p>
                          <div className='d-flex'>
                            <input className='widthFrame'  id='ancho' name='ancho' type='number' step="any" min='0' max='300' required onChange={(e)=>{setWidthFrame(parseFloat(e.target.value))}} onKeyDown={handleKeyDown}></input>
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
                   <div className='colorsContainer'><ColorsPalete/></div> 
                </div>
              </div>
              <div className='thirdContainer d-flex flex-column'>
                <div className='frameExtra Box d-flex flex-column '>
                  <p>Adicionales</p>
                  <div className='paspatuOption d-flex flex-row'>
                    <div className='checkExtra d-flex'>
                      <div className='d-flex align-items-center' style={{width:'auto',height:'24px'}}><input type='checkbox' checked={checkBox1} onChange={handleChangeBox1}/><label>Paspartú</label></div>
                    </div>
                    {
                      checkBox1!==true ?(<></>):(<div className='customizePaspartu d-flex '>
                      <div className='d-flex flex-column'>
                        <div className='cuadrado d-flex flex-column'>
                            <div className='row1 d-flex justify-content-center'>
                              <div className='lineaRow1'></div>
                            </div>
                            <div className='middle d-flex'>
                              <div className='row2 d-flex align-items-center'>
                                <div className='lineaRow2'></div>
                              </div>
                              <div className='artePaspartu'>ARTE</div>
                              <div className='row2 d-flex align-items-center'>
                                <div className='lineaRow2'></div>
                              </div>
                            </div>
                            <div className='row1 d-flex justify-content-center'>
                              <div className='lineaRow1'></div>
                            </div>
                        </div>
                        <div className='inputPaspartuWidth d-flex justify-content-center'>
                          <input  type='number'min='0' max='20' onChange={(e)=>{setWidthPaspartu(e.target.value)}}/><label>cm</label>
                        </div>
                      </div>
                      <div className='inputPaspartuHeight d-flex flex-column align-items-center'>
                          <div className='d-flex align-items-center' style={{height:'100%'}}>
                            <input type='number'min='0' max='20' onChange={(e)=>{setHeightPaspartu(e.target.value)}}/><label>cm</label>
                          </div>
                          <div className='paspartuBlank'></div>
                      </div>
                    </div>)
                    }
                  </div>
                  <div className='checkExtra d-flex align-items-center'>
                    <input type='checkbox'checked={checkBox2} onChange={handleChangeBox2}/>
                    <label>Acrílico Transparente</label>
                    <i id='popInfoAcrilico' class="bi bi-info-circle">
                      <div className='messagePop'>
                        <MensajeFlotante text={'Se remplaza el vidrio del cuadro por el acrílico'}/>
                      </div>
                    </i>
                  </div>
                  <div className='checkExtra d-flex align-items-center'><input type='checkbox'checked={checkBox3} onChange={handleChangeBox3}/><label>Listo para colgar</label></div>
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
                  <p id='changePrice' style={{color:'white'}}>{price}</p>
                </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Craft