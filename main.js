// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });

document.addEventListener('DOMContentLoaded', () => {
    const cardArr = [
        {
            image: 'abu',
            src: 'images/abu.jpg'
        },
        {
            image: 'aladdin',
            src: 'images/aladdin.png'
        },
        {
            image: 'Carpet',
            src: 'images/Carpet.jpg'
        },
        {
            image: 'genie1',
            src: 'images/genie1.jpg'
        },
        {
            image: 'j4',
            src: 'images/j4.jpg'
        },
        {
            image: 'sultan',
            src: 'images/sultan.jpg'
        },
        {
            image: 'retu',
            src: 'images/retu.jpg'
        },
        {
            image: 'jafar',
            src: 'images/jafar.jpg'
        },
        {
            image: 'abu',
            src: 'images/abu.jpg'
        },
        {
            image: 'aladdin',
            src: 'images/aladdin.png'
        },
        {
            image: 'Carpet',
            src: 'images/Carpet.jpg'
        },
        {
            image: 'genie1',
            src: 'images/genie1.jpg'
        },
        {
            image: 'j4',
            src: 'images/j4.jpg'
        },
        {
            image: 'sultan',
            src: 'images/sultan.jpg'
        },
        {
            image: 'retu',
            src: 'images/retu.jpg'
        },
        {
            image: 'jafar',
            src: 'images/jafar.jpg'
        },
    ]

// add here new variables and functions

const game = document.querySelector('#game')

// add two arrays  one for checked Cards and the second one for won Cards 
const cardsWon = []
let checkedCards = []
let checkedCardId = []
// crate the game stage

function crateGameStage() {
    cardArr.forEach( (el , i) => {
        let card = document.createElement('img')
        card.src = 'images/genie.png'
        card.height = 150
        card.width = 150
        card.id = i
        // console.log("i = ",i)
        game.appendChild(card)
        card.onclick = flipCrd
    });
    console.log("function crateGameStage")
}
// now function to flip the cards
// console.log("this :" ,this)
function flipCrd(){
    // console.log("flip function")
    let cardId = this.getAttribute('id')
    // console.log("cardId= ",cardId)
    checkedCards.push(cardArr[cardId].image)
    checkedCardId.push(cardId)
    console.log("cardArr[cardId].image=",cardArr[cardId].src)
    // this.src = cardArr[cardId].image
    this.setAttribute('src',cardArr[cardId].src )
    // console.log("this.src",this.src)
    // console.log("checkedCards",checkedCards)
    // console.log("checkedCardId",checkedCardId);
    // if checkedCards have two element and they match correctly then let them locked
    

}

crateGameStage()
})

console.log("hi main.js")

