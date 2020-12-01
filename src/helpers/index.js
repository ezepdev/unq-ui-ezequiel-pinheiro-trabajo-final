const characters = ['Piedra','Papel','Tijera','Lagarto','Spock']

const computerSelection = () => characters[Math.floor(Math.random()*characters.length)];

function killTo(character, otherCharacter) {
	if (character === 'Piedra') {
		if (otherCharacter === 'Tijera' || otherCharacter === 'Lagarto') return true
	}
	if (character === 'Papel') {
		if (otherCharacter === 'Piedra' || otherCharacter === 'Spock') return true
	}
	if (character === 'Tijera') {
		if (otherCharacter === 'Papel' || otherCharacter === 'Lagarto') return true
	}
	if (character === 'Lagarto') {
		if (otherCharacter === 'Papel' || otherCharacter === 'Spock') return true
	}
	if (character === 'Spock') {
		if (otherCharacter === 'Piedra' || otherCharacter === 'Tijera') return true
	}
	return false
}

export {killTo,computerSelection}