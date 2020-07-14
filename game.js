const buttonColours = ['red', 'blue', 'green', 'yellow']
let gamePattern = []
let userClickedPattern = []
let level = 0
let started = false

$(document).keypress(function() {
    if (!started) {
        $('#level-title').text('Level ' + level)
        nextSequence()
        started = true
    }
})

$('.btn').click(function() {
    if (started) {

        const userChosenColour = $(this).attr('id')
        userClickedPattern.push(userChosenColour)
    
        playSound(userChosenColour)
    
        animatePress(userChosenColour)
    
        checkAnswer(userClickedPattern.length - 1)
    }
})

function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        console.log('success')
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence()
            }, 1000)
        }
    } else {
        console.log('wrong')
        playSound('wrong')
        $('body').addClass('game-over')
        setTimeout(function() {
            $('body').removeClass('game-over')
        }, 200)
        $('#level-title').text('Game Over, Press Any Key to Restart')
        startOver()

    }
}
// _4
// for (let i=0; i<10; i++) { 
//    task(i); 
// } 
  
// function task(i) { 
//   setTimeout(function() { 
//       // Add tasks to do 
//   }, 2000 * i); 
// } 

function playSequence() {
    for (i = 0; i < gamePattern.length; i++){
        playPattern(i)
    }
}

function playPattern(index) {
    let color = gamePattern[index]
    setTimeout(function() {
        $('#' + color).fadeIn(100).fadeOut(100).fadeIn(100)
    
        playSound(color)
    }, 500 * i)

}

function nextSequence() {
    userClickedPattern = []
    const randomNumber = Math.floor(Math.random() * 4)
    const randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    level += 1
    $('#level-title').text('Level ' + level)
    
    playSequence()
    // $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)

    // playSound(randomChosenColour)
}

function playSound(name) {
    const audio = new Audio('sounds/' + name + '.mp3')

    audio.play()
}

function animatePress(currentColour) {
    $('#' + currentColour).addClass('pressed')

    setTimeout(function() {
        $('#' + currentColour).removeClass('pressed')
    }, 100)
}

function startOver() {
    started = false
    gamePattern = []
    level = 0
}
