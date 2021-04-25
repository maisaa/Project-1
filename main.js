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
        card.onclick = flipCard
    });
    console.log("function crateGameStage")
}
// now function to flip the cards
// console.log("this :" ,this)
function flipCard(){
    // console.log("flip function")
    let cardId = this.getAttribute('id')
    // console.log("cardId= ",cardId)
    checkedCards.push(cardArr[cardId].image)
    checkedCardId.push(cardId)
    console.log("cardArr[cardId].image=",cardArr[cardId].src)
    // this.setAttribute('src',cardArr[cardId].src )
    this.src = cardArr[cardId].src
    
    // console.log("this.src",this.src)
    console.log("checkedCards",checkedCards)
    console.log("checkedCardId",checkedCardId);


    // if checkedCards have two element then call isMatch function to check them and then if they match correctly then let them locked
    if( checkedCards.length == 2){
        console.log("set time out")
        setTimeout(isMatch, 1000)
        
        // setInterval(isMatch, 1);

    }
}
//function match cards
function isMatch(){
    // console.log("hii match")
    let cards = document.querySelectorAll('img')

    // If double click on the same image with same (...Id...)
    if( checkedCardId[0] === checkedCardId[1] ){
        console.log(".............")

        cards[checkedCardId[0]].src = 'images/genie.png';
        cards[checkedCardId[1]].src = 'images/genie.png';
        alert('mmmmm')

    } // if click on two images with the same photo (...src value....)
    else if( checkedCards[0] === checkedCards[1] ){
            cards[checkedCardId[0]].src = 'images/e.jpg';
            cards[checkedCardId[1]].src = 'images/e.jpg';

            // if cards match correctly then let them locked (not abel to clicked)
            // cards[checkedCardId[0]].removeEventListener('onclick', flipCard)//.disabled = true;
            // cards[checkedCardId[1]].removeEventListener('onclick', flipCard)

            cards[checkedCardId[0]].disabled = true;
            cards[checkedCardId[1]].disabled = true;
            cardsWon.push(checkedCards)
    }else {
        cards[checkedCardId[0]].src = 'images/genie.png';
        cards[checkedCardId[1]].src = 'images/genie.png';
        
    }
    checkedCards = [];
    checkedCardId = [];
    

}
cardArr.sort( () => 0.3 -Math.random())

crateGameStage()
})

console.log("hi main.js")

