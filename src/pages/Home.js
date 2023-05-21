import React,{useState, useEffect} from 'react'
//import banner from '../images/banner-muebleV2.png'
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
      {/* <div className='container-xl d-flex flex-column justify-content-end  big-banner'>
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
      </div> */}
      <div className='bannerAnimation css-selector'>
        hola
      </div>
      <div className='container-xl'>
        <div className='encabezadoProduct'>
          Nuestros Productos
        </div>
        <div className='d-flex flex-row flex-nowrap justify-content-between'>
          {listaProductos.map(producto=>(
          <Products img='gallery'pNombre={producto.nomProducto} pDesc={producto.descProducto} pCost={`S/${producto.precioProducto}`}/>
        ))}
          <a href='/product'><Products img='gallery' pNombre='CUADRO DOBLE MARCO' pDesc='Una triste descripcion qu' pCost='$19.90'/></a>
        </div>
      </div>
      <div className='container-xl'>
        <div className='itemsButton'>
          <button className='btn btn-primary'>Planos</button>
          <button className='btn btn-primary'>Box</button>
          <button className='btn btn-primary'>Doble Vidrio</button>
        </div>
        <div className='items-container'>
          {listaProductos.map(producto=>(
            <Products img='gallery'pNombre={producto.nomProducto} pDesc={producto.descProducto} pCost={`S/${producto.precioProducto}`}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home