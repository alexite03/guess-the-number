const randomValue = Math.floor(Math.random() * 100)
console.log(randomValue)

function getUserGuess() {
    const stringValue = document.getElementById('user-input').value
    return parseInt(stringValue)
}

function setMessage(msg){
    document.getElementById('message').innerText = msg
}

addEventListener("keyup", 
function(event){
if(event.key === "Enter"){
const guess = getUserGuess()

    if(randomValue === guess){
    setMessage("Correct!")
    }
    else if(randomValue < guess){
    setMessage("Too High!")
    document.getElementById('user-input').value = ''
    }
    else if(randomValue > guess){
    setMessage("Too Low!")
    document.getElementById('user-input').value = ''
    }

}})