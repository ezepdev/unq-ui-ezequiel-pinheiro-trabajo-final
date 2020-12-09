import React from 'react'

const GestureSelector = ({gesture,onClick}) => {
	return (
		<button className="character-selector btn-outline-info shadow-none p-1" id={gesture.name} onClick={onClick} name={gesture.name}>
			<img src={gesture.image} alt={gesture.name} name={gesture.name} />
			<div className="overlay">
				<h3 className="character-title">{gesture.name}</h3>
			</div>
		</button>
	)
}

export default GestureSelector
