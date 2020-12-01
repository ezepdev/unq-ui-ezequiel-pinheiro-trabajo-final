import React from 'react'

import {useHistory} from 'react-router-dom'


const WelcomePage = (props) => {

	const history = useHistory()

	const handleClick = () => {
		history.push('/game')
	}


	return (
		<div>
			Welcome to the game
			<button onClick={handleClick} >
				Start !!! 
			</button>
		</div>
	)
}

export default WelcomePage
