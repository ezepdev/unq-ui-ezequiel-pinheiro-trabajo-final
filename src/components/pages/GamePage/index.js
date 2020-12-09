import React, { useState,useEffect } from 'react'
import { killTo, computerSelection, winnerMessageFor, gestures } from 'helpers'
import GestureSelector from 'components/GestureSelector'
import VersusField from 'components/VersusField' 
import {useHistory} from 'react-router-dom'

import './styles.css'


const GamePage = ({numberOfGames = 3}) => {


	const history = useHistory()
	const [playerChoice,setPlayerChoice]= useState('')
	const [computerChoice,setComputerChoice] = useState('')
	const [result,setResult] = useState({})
	const [moves, setMoves] = useState([])
	
	const handleClick = (e) => {
		e.target.name ? setPlayerChoice(e.target.name) : setPlayerChoice(e.target.innerText) 
		setComputerChoice(computerSelection)
	}

	const handleReset = () => {
		setPlayerChoice('')
		setComputerChoice('')
		setResult({})
		setMoves([])
		history.push('/game')
	}

	const checkResult = () => {
		if (playerChoice == '' || computerChoice == '') return
		if (playerChoice === computerChoice) setResult({ winner: 'Anyone', gestureWinner: playerChoice, gestureLoser: computerChoice, optionalMessage: "Ni pa ti, ni pa mi" })
		else {
			if (killTo(playerChoice, computerChoice)) {
				const newResult = {
					winner: 'Player',
					gestureWinner: playerChoice,
					gestureLoser: computerChoice,
					optionalMessage: winnerMessageFor(playerChoice, computerChoice)
				}
				setResult(
					newResult)
				setMoves(moves.concat(newResult))
			}
			else {
				const newResult = {
					winner: 'PC',
					gestureWinner: computerChoice,
					gestureLoser: playerChoice,
					optionalMessage: 'Mala suerte, intentalo otra vez'
				}
				setResult(newResult)
			setMoves(moves.concat(newResult))
		}
		}
	}

	useEffect(
		() => {
		checkResult()

		},[numberOfGames,playerChoice,computerChoice]
	)

	const gamesWinning = moves.filter(move => move.winner === 'Player').length
	const gamesLoses = moves.filter(move => move.winner === 'PC').length 

	return (
		<>
			{ moves.length < numberOfGames ?
				
				<div className="container">
				<div className="container w-75 ml-3 characters-container ">
					<h2 id="title">Selecciona tu gesto</h2>
					<GestureSelector gesture={gestures[0]} onClick={handleClick} />
					<GestureSelector gesture={gestures[1]} onClick={handleClick} />
					<GestureSelector gesture={gestures[2]} onClick={handleClick} />
					<GestureSelector gesture={gestures[3]} onClick={handleClick} />
					<GestureSelector gesture={gestures[4]} onClick={handleClick} />
				</div>
				{ <div>
					{	
						(moves.length !== 0) ?
						<>					
								<VersusField games={numberOfGames} gestureNameOne={playerChoice} gestureNameTwo={computerChoice} result={result} />
								<div className="mt-5">
										<h5>Ganadas: {gamesWinning}</h5>
									<h5>Perdidas: { gamesLoses }</h5>
								</div>
						</>
							:
							null
					}					
				</div> }
			</div>
				:
				<div className="container-xs ">
					<div className="container-lg text-center mb-3">
						<VersusField games={numberOfGames} gestureNameOne={playerChoice} gestureNameTwo={computerChoice} result={result} />		
					</div>
					{
					gamesWinning > gamesLoses ?
					<div class="alert alert-success text-center" role="alert">
								<h3 class="alert-heading ">
									Has ganado {gamesWinning} a {gamesLoses}
								<br/>	
								Bien hecho !!!. Lo has logrado!!! 
						</h3>
						<hr/>
  						<button onClick={handleReset} className="btn btn-success">Volver a jugar</button>
					</div>	
					:	<div class="alert alert-danger text-center" >
						<h3 class="alert-heading ">
									Has perdido {gamesLoses} a {gamesWinning}
								<br/>	
								Que mala suerte !! No importa, vuelve a intentarlo !! 
						</h3>
						<hr/>
								<button onClick={handleReset} className="btn btn-outline-danger ">
									Revancha !!
								</button>
					</div>}
  				
			</div>
						
			}
		</>
		
		
	)
}

export default GamePage
