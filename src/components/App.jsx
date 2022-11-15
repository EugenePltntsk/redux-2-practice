import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getFavoriteColor } from "../redux/sliceColors/sliceColors"

export default function App() {
  
  const favoriteColor = useSelector(state=> state.colors.favoriteColor); 


  const dispatch = useDispatch();

const getColor = (event) => {
dispatch(getFavoriteColor(event.target.style.backgroundColor));
}




  return (

    <div style={{ backgroundColor: favoriteColor }}>App

      <ul> Choose your favorite color
        <li onClick={getColor} style={{ backgroundColor:"green", height: "70px" }}>Green</li>
        <li onClick={getColor} style={{ backgroundColor:"red", height: "70px" }}>Red</li>
        <li onClick={getColor} style={{ backgroundColor:"blue", height: "70px" }}>Blue</li>
        <li onClick={getColor} style={{ backgroundColor:"yellow", height: "70px" }}>Yellow</li>
        <li onClick={getColor} style={{ backgroundColor:"brown", height: "70px" }}>Brown</li>
      </ul>




    </div>
  )
}
