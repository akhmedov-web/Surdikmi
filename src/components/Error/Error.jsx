import React from 'react';
import Photo from "../../assets/o'zbegim.jpg";
import {Link} from "react-router-dom"
export default function Error() {
  return (
    <div>
      <h1 className='errorText mt-3'>Congratulations on staying in Uzbekistan!</h1>
      <h5 className='text-center'>O'zbegim uchun jonim fido, xalqim uchun jonim fido!!!</h5>
      <img src={Photo} alt="img" className='errorImg mx-auto d-block mt-3 img-thumbnail'/>
      <Link to="/" className='return'>
      <button className='btn btn-info w-50 mx-auto d-block mt-3' >Return Home</button>
      </Link>
    </div>
  )
}
