import React from 'react'
import { useDispatch } from 'react-redux'
import {AddCarts} from '../features/AddCart'

const ProductItems = ({id,title,image}) => {
    const dispatch=useDispatch();
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <h3 style={{textAlign:'center'}}>{title}</h3>
        <img src={image} alt='ProudctImage' height={150} width={150}/>
        <button onClick={()=>dispatch(AddCarts({
            id,image,title
        }))}>Add to Cart</button>
    </div>
    </>
  )
}

export default ProductItems