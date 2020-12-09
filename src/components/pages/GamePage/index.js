import React, { useState,useEffect } from 'react'
import { killTo, computerSelection, winnerMessageFor, gestures } from 'helpers'
import GestureSelector from 'components/GestureSelector'
import VersusField from 'components/VersusField' 


import './styles.css'


const GamePage = () => {

	const [playerChoice,setPlayerChoice]= useState('')
	const [computerChoice,setComputerChoice] = useState('')
	const [result,setResult] = useState({})
	const [moves, setMoves] = useState([])
	
	const handleClick = (e) => {
		e.target.name ? setPlayerChoice(e.target.name) : setPlayerChoice(e.target.innerText) 
		setComputerChoice(computerSelection)
	}

	const checkResult = () => {
		if (playerChoice == '' || computerChoice == '') return
		if (playerChoice === computerChoice) setResult({ message:'Empate',optionalMessage:"Ni pa tu, ni pa mi"})
		else {
			killTo(playerChoice, computerChoice) ?
				setResult(
				{
					winner: 'Player',
					gestureWinner: playerChoice,
					gestureLoser: computerChoice,
					optionalMessage: winnerMessageFor(playerChoice, computerChoice)
				})
				:
				setResult({
					winner: 'PC',
					gestureWinner: computerChoice,
					gestureLoser: playerChoice,
					optionalMessage: 'Mala suerte, intentalo otra vez'
				})
		}
	}


	useEffect(() => {
		if(playerChoice !== '' || computerChoice !== '') setMoves((moves) => moves.concat({ player: playerChoice, computer: computerChoice }))
		checkResult()
	}, [playerChoice,computerChoice])

	return (
		<>
			<div className="container">
				<div className="container w-75 ml-5 characters-container ">
					<h1 id="title">Selecciona tu gesto</h1>
					<GestureSelector gesture={gestures[0]} onClick={handleClick} />
					<GestureSelector gesture={gestures[1]} onClick={handleClick} />
					<GestureSelector gesture={gestures[2]} onClick={handleClick} />
					<GestureSelector gesture={gestures[3]} onClick={handleClick} />
					<GestureSelector gesture={gestures[4]} onClick={handleClick} />
				</div>
				{ <div>
					{	
						(Object.keys(result).length !== 0) ?
						<>					
								<VersusField gestureNameOne={playerChoice} gestureNameTwo={computerChoice} result={result} />
						</>
							:
							null
					}					
				</div> }
			</div>
	</>
	)
}

export default GamePage
