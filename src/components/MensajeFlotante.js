import React from 'react'

function MensajeFlotante(props) {
  return (
    <div style={{width:'10rem',height:'auto',backgroundColor:'red',position:'absolute'}}>
        <p>
            {props.text}
        </p>
    </div>
  )
}

export default MensajeFlotante