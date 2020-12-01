import React from 'react'

import {useHistory} from 'react-router-dom'


const WelcomePage = (props) => {

	const history = useHistory()

	const handleClick = () => {
		history.push('/game')
	}


	return (
		<div>
			<h1>Bienvenido a Piedra-Papel-Tijera-Lagarto-Spock</h1>
			<button onClick={handleClick} >
				Jugar vs PC
			</button>
		</div>
	)
}

export default WelcomePage
