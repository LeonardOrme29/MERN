import React,{useState, useEffect} from 'react'
//import banner from '../images/banner-muebleV2.png'
import mueble from '../images/mueble.png'
import cuadro from '../images/cuadro-banner1.png'
import Products from '../components/Products'
import axios from 'axios'


function Home() {
  const [listaProductos,setListaProductos]=useState([]);
  useEffect(()=>{
    getProductos()
  },[])
  const getProductos= async ()=>{
    const res=await axios.get('http://localhost:3001/producto/cuadro2');
    setListaProductos(res.data);
  }
  return (
    <>
      <div className='container-fluid d-flex flex-column justify-content-end  big-banner'>
      <div className='d-inline-flex f-column justify-content-between'>
        <div className='d-flex align-items-center'>
        <i class="arrow bi bi-arrow-left"></i>
        </div>
        <div className='display-banner'>
          <img className='cuadro img-fluid' src={cuadro} alt='cuadro paisaje'/>
        </div>
        <div className='d-flex align-items-center'>
          <i class="arrow bi bi-arrow-right"></i>
        </div>
      </div>
        <div className='mueble align-self-center'>
          <img className='mueble-banner img-fluid' src={mueble} alt='mueblecito'/>
        </div>
      </div>
      <div className='container-xll'>
        <div className='d-flex flex-row flex-nowrap justify-content-between'>
          {listaProductos.map(producto=>(
          <Products img='gallery'pNombre={producto.nomProducto} pDesc={producto.descProducto} pCost={`S/${producto.precioProducto}`}/>
        ))}
          <Products img='gallery' pNombre='CUADRO DOBLE MARCO' pDesc='Una triste descripcion' pCost='$19.90'/>
        </div>
      </div>
    </>
  )
}

export default Home