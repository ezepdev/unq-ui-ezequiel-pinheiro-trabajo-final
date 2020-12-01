import React, { useState,useEffect } from 'react'
import {killTo,computerSelection} from '../../helpers'

const GamePage = () => {

	const [playerChoice,setPlayerChoice]= useState('')
	const [computerChoice,setComputerChoice] = useState('')
	const [result,setResult] = useState('')

	const handleClick = (e) => {
		setPlayerChoice(e.target.value)
		setComputerChoice(computerSelection)
	}

	const checkResult = () => {
		if (playerChoice == '' || computerChoice == '') return
		if (playerChoice === computerChoice) setResult('Empate')
		else {
			killTo(playerChoice, computerChoice) ? setResult('Gano player') : setResult('Perdio player')
		}
	}


	useEffect(() => {
		console.log(playerChoice);
		console.log(computerChoice);
		checkResult()
	}, [playerChoice,computerChoice])

	return (
		<div>
			<button onClick={handleClick} value='Piedra'> Piedra </button>
			<button onClick={handleClick} value='Papel'> Papel </button>
			<button onClick={handleClick} value='Tijera'> Tijera </button>
			<button onClick={handleClick} value='Lagarto'> Lagarto </button>
			<button onClick={handleClick} value='Spock'> Spock </button>
			<span>El ganador es : {result}</span>

		</div>
	)
}

export default GamePage
