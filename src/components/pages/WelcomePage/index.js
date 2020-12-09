import React from 'react'

import {useHistory} from 'react-router-dom'


const WelcomePage = (props) => {

	const history = useHistory()

	const handleClick = () => {
		history.push('/game')
	}


	return (
		<div className="container-xl text-center">
			
			<h1 className="mt-5">Piedra-Papel-Tijera-Lagarto-Spock</h1>			
			<div className="container-md text-center w-25 mt-5 p-3">

				<button type="button" className="btn btn-outline-dark btn-lg btn-block" onClick={handleClick} >
					Al mejor de 3 Vs PC
				</button>
			</div>
		</div>
	)
}

export default WelcomePage
