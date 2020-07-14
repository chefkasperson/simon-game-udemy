const buttonColours = ['red', 'blue', 'green', 'yellow']
const gamePattern = []

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4)
    const randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
}