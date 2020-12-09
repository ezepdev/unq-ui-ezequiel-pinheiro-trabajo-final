import StoneImage from 'assets/stone.png'
import PaperImage from 'assets/paper.png'
import ScisorImage from 'assets/scisor.png'
import LizardImage from 'assets/lizard.png'
import SpockImage from 'assets/spock.png'


const gestures = [
	{ name: 'Piedra' ,image: StoneImage},
	{ name: 'Papel',image: PaperImage },
	{ name: 'Tijera',image: ScisorImage },
	{ name: 'Lagarto',image: LizardImage },
	{ name: 'Spock',image: SpockImage }
]

const computerSelection = () => (gestures[Math.floor(Math.random()*gestures.length)]).name;

function killTo(gesture, otherGesture) {
	if (gesture === 'Piedra') {
		if (otherGesture === 'Tijera' || otherGesture === 'Lagarto') return true
	}
	if (gesture === 'Papel') {
		if (otherGesture === 'Piedra' || otherGesture === 'Spock') return true
	}
	if (gesture === 'Tijera') {
		if (otherGesture === 'Papel' || otherGesture === 'Lagarto') return true
	}
	if (gesture === 'Lagarto') {
		if (otherGesture === 'Papel' || otherGesture === 'Spock') return true
	}
	if (gesture === 'Spock') {
		if (otherGesture === 'Piedra' || otherGesture === 'Tijera') return true
	}
	return false
}



function winnerMessageFor(winnerGesture, loserGesture) {

		switch (winnerGesture) {
			case 'Piedra':
				if (loserGesture === 'Tijera') return 'Genial, esa tijera ya no volvera a cortar'
				if (loserGesture === 'Lagarto') return 'La buena piedra, nada le gana'
			case 'Papel':
				if (loserGesture === 'Piedra') return 'Nada sobrevive a una envoltura de papel '
				if (loserGesture === 'Spock') return 'No pudistes con este papeleo spock'	
			case 'Tijera':
				if (loserGesture === 'Papel') return 'Confeti para todos'
				if (loserGesture === 'Lagarto') return 'Excelente, pero pobrecito el lagartito '
			case 'Lagarto':
				if (loserGesture === 'Spock') return 'Por favor, un antidoto para spock'
				if (loserGesture === 'Papel') return 'Mmmmm, rico papel'
			case 'Spock':
				if (loserGesture === 'Tijera') return 'Esas tijeras quedaron hechas pure'
				if (loserGesture === 'Piedra') return 'Spock desintegra la piedra'
			
			default:
				return 'Felicitaciones'	
				
		}
	}

export {killTo,computerSelection,winnerMessageFor,gestures}