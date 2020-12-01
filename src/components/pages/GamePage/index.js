import React, { useState,useEffect } from 'react'
import {killTo,computerSelection} from 'helpers'
import logoPiedra from 'assets/stone.png'
import logoPapel from 'assets/papel.png'
import logoTijeras from 'assets/tijeras.png'
import logoLagarto from 'assets/lagarto.png'
import logoSpock from 'assets/spock.png'



import './styles.css'



const GamePage = () => {

	const [playerChoice,setPlayerChoice]= useState('')
	const [computerChoice,setComputerChoice] = useState('')
	const [result,setResult] = useState('')
	const [moves,setMoves] = useState([])

	const handleClick = (e) => {
		setPlayerChoice(e.target.name)
		setComputerChoice(computerSelection)
	}

	const checkResult = () => {
		if (playerChoice == '' || computerChoice == '') return
		if (playerChoice === computerChoice) setResult('Empate')
		else {
			killTo(playerChoice, computerChoice) ? setResult('Tu ganas') : setResult('Tu pierdes')
		}
	}

	console.log("render");
	console.log(moves);


	useEffect(() => {
		if(playerChoice !== '' || computerChoice !== '') setMoves((moves) => moves.concat({ jugador: playerChoice, computer: computerChoice }))
		checkResult()
	}, [playerChoice,computerChoice])

	return (
		<>
			<div className="container">
				<div className="characters-container">
					<h1 id="titulo">Selecciona tu gesto</h1>
					<button className="character-selector" id="piedra" onClick={handleClick} name='Piedra'>
							<img src={logoPiedra} alt="" name="Piedra" />
							<div className="overlay">
								<h3 className="character-title">Piedra</h3>
							</div>
					</button	>
					<button className="character-selector" id="papel" onClick={handleClick} name="Papel">
							<img src={logoPapel} alt="" name='Papel' />
							<div className="overlay">
								<h3 className="character-title">Papel</h3>
							</div>
					</button>
					<button className="character-selector" id="tijera" onClick={handleClick} name='Tijera'>
							<img src={logoTijeras} alt="" name='Tijera' />
							<div className="overlay">
								<h3 className="character-title">Tijera</h3>
							</div>
					</button>
					<button className="character-selector" id="lagarto" onClick={handleClick} name="Lagarto">
							<img src={logoLagarto} alt="" name='Lagarto' />
							<div className="overlay">
								<h3 className="character-title">Lagarto</h3>
							</div>
					</button>
					<button className="character-selector" id="spock" onClick={handleClick} name='Spock'>
						<img src={logoSpock} alt="" name='Spock' />
						
						<div className="overlay">
							<h3 className="character-title">Spock</h3>
						</div>
				</button>
				</div>
				<div>
					{	
						(result != "") ?
						<>
							<h1>Resultado</h1>
							
							<p>El jugador eligio: {moves[moves.length-1].jugador}</p>
							<p>La computadora eligio: {moves[moves.length-1].computer}</p>
							
								<p>{result}</p>
							</>

							:null
					}					
				</div>
			</div>
	</>
	)
}

export default GamePage
