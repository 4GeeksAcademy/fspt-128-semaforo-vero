import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="row rounded-4 flex-column bg-dark d-flex gap-4 justify-content-around p-4">
        <div className=" rojo col-1 rounded-circle bg-danger"></div>
        <div className=" amarillo col-1 rounded-circle bg-warning"></div>
        <div className=" verde col-1 rounded-circle bg-success"></div>
      </div>
    </div>
  )

}


export default Home;