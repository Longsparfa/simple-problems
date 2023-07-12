function ageInDays() {
    let birthYear = prompt('What year were you born my friend?')
    num = birthYear;

    let currentYear = new Date().getFullYear();
    let calculateAge = (birthYear - currentYear) * 365;

    if (birthYear === null || birthYear === "" ) {
        document.getElementById('emptyMsg').innerHTML= 'Can\'t be empty. Please input a number.'
        return false;
    } else if (birthYear.length<4 || birthYear.length>4) {
        document.getElementById('emptyMsg').innerHTML="Birth Year must be four numbers.";
        return false;
    } else if (isNaN(num)) {
        document.getElementById('emptyMsg').innerHTML='Please input numbers only.'
        return false;
    } else {
        console.log('we are up!' + calculateAge + 'days on earth.');
    }

    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('My friend you are ' + calculateAge + 'days old. Congratulations! ');
    h1.appendChild(textAnswer);
    document.getElementById('results').appendChild(h1);
    h1.setAttribute('id', 'reset');

}

function resetAge() {
    document.getElementById('reset').remove();
    
}

//Challenge Two
function generatePix() {
    let image = document.createElement('img');
    image.src = 'PHOTO-2020-04-07-12-17-21.jpg';
    let div = document.getElementById('photo-flex');
    div.appendChild(image)
}

//Challenge Three
function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id
    console.log(humanChoice);
    botChoice = convertNumberToChoice(enableRandomPicks())
    console.log(botChoice);
    results = decideWinner(humanChoice, botChoice)
    console.log(results);
    message = finalMessage(results);
    console.log(message)
    frontEnd(yourChoice.id, botChoice, message);
}

function enableRandomPicks() {
    return Math.floor(Math.random() * 3)
}

function convertNumberToChoice(number) {
    return ['rock', 'paper', 'scissors'] [number]
}

//How do i decide the winner
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};
    } else if (yourScore === 0.5) {
        return {'message': 'It\'s a draw!', 'color': 'yellow'};
    } else {
        return {'message': 'You Win!!!', 'color': 'green'};
    }
}

function frontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'  id=humanDiv>";

    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; ' id=messageDiv>" + finalMessage['message'] + "</h>";

    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'  id=botDiv>";
    

    document.getElementById('flexbox-rps').appendChild(humanDiv);

    document.getElementById('flexbox-rps').appendChild(messageDiv);    

    document.getElementById('flexbox-rps').appendChild(botDiv);
    


}

