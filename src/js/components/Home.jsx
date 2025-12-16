import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  
	const [activo, setActivo] = useState(0);
	const colores = [
		{ id: 1, nombre: 'verde' },
		{ id: 2, nombre: 'amarillo' },
		{ id: 3, nombre: 'rojo' }
	]
	return (
		<>
			<div className="container d-flex  flex-column align-items-center justify-content-center mt-4">
				<div className="semaforo bg-dark rounded d-flex justify-content-center align-items-center flex-column">
					{
						colores.map(color => (													//para concatenar ${fjsO3}									//cambiame el valor de activo
							<div key={color.id} className={`${color.nombre}  ${activo === color.id ? 'activado' : ''}`} onClick={() => setActivo(color.id)}></div>
						))																														//nuevo valor para activo
					}

				</div>
				<div className="poster bg-dark"></div>
			</div >
		</>
 
	);
};




export default Home;