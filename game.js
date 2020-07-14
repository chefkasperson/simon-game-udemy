const buttonColours = ['red', 'blue', 'green', 'yellow']
const gamePattern = []
const userClickedPattern = []

$('btn').click(function() {
    const userChosenColour = $(this).attr('id')
    userClickedPattern.push(userChosenColour)
})
function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4)
    const randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    
    $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)

    const audio = new Audio('sounds/' + randomChosenColour + ".mp3")

    audio.play()
}
