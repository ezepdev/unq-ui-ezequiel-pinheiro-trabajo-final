import React from 'react'
import { gestures } from 'helpers'

import './styles.css'


const VersusField = ({gestureNameOne,gestureNameTwo, resultMessage,messageOptional}) => {
		
	const ImageGestureOne = gestures.find(gesture => gesture.name === gestureNameOne).image
	const ImageGestureTwo = gestures.find(gesture => gesture.name === gestureNameTwo).image

	return (
		<div class="card mt-5 border">
			<div className="card-header bg-dark text-white">
				<h3> Resultado : {resultMessage} </h3>
			</div>
			<div class="card-body p-0 bg-trasparent">
				<div className="versusField-container m-2 p-2 m-1">
				<h5 id="labelPlayer">Jugador</h5>
				<h5 id="labelPC">Pc</h5>
				<h4>VS</h4>
				<img src={ImageGestureOne} alt={gestureNameOne} name={gestureNameOne} id="gestureNameOne"/>
				<img src={ImageGestureTwo} alt={gestureNameTwo} name={gestureNameTwo} id="gestureNameTwo" />
				</div>
			<div className="card-footer bg-info text-white">
					<h4>
					{messageOptional}
					</h4>
			</div>	
		</div>
			</div>
			
		
	)

}

export default VersusField
