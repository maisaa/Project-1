// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
// });

document.addEventListener('DOMContentLoaded', () => {
    const cardArr = [
        {
            image: 'abu',
            src: 'images/abu.jpj'
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
            src: 'images/abu.jpj'
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
    cardArr.forEach(element => {
        let card = document.createElement('img')
        card.src = 'images/genie.png'
        card.height = 150
        card.width = 150
        card.id = element
        game.append(card)
    });
}
// console.log("hi main.js")
crateGameStage()
})

console.log("hi main.js")

