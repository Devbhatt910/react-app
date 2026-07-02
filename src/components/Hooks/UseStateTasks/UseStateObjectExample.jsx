import { useState } from "react";

const UseStateObjectExample = () => {

    const [car,setCar] = useState({
        brand:'Honda',
        model:'City',
        color:'Black',
        year:2026
    })

   const updateCarDetails = () => {
    setCar((prev)=>{
      return{
        ...prev,
        model:'Civic',
        year:2023,
        color:'Red'
      }
    })
   }

  return (
    <div>
      <h2>Current Car Details</h2>
      <h5>Car Name : {car.model}</h5>
      <h5>Brand: {car.brand}</h5>
      <h5>Color: {car.color}</h5>
      <h5>Year: {car.year}</h5>
      <br />
      <div>
        <button onClick={updateCarDetails}>Update</button>
      </div>
    </div>
  )
}

export default UseStateObjectExample
