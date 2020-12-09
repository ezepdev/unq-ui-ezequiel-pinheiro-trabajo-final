import React from 'react'
import { gestures } from 'helpers'

import './styles.css'


const VersusField = ({gestureNameOne,gestureNameTwo, result}) => {
		
	const ImageGestureOne = gestures.find(gesture => gesture.name === gestureNameOne).image
	const ImageGestureTwo = gestures.find(gesture => gesture.name === gestureNameTwo).image

	const winningResult = (
			
		<>
			<p>{result.winner + ' gana'}</p>
		</>
	)
	return (
		<div class="card mt-5 border">
			<div className="card-header bg-dark text-white">
				<h3>{result.winner ? winningResult : 'Empate'} </h3>
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
				{	
						result.winner ?
								<h4>
								{result.gestureWinner + ' mata a ' + result.gestureLoser} 
				<div class="dropdown-divider"></div>
								
								</h4>	
								:
								null
									
						}								
				<h5>
					{result.optionalMessage}
				</h5>
			</div>	
		</div>
			</div>
			
		
	)

}

export default VersusField
