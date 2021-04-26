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
    let moves = document.querySelector('#moves')
    let timer = document.querySelector('#timer')
    let score = document.querySelector('#score')
    const game = document.querySelector('#game')
    const audio = document.querySelector("audio");
    const play = document.querySelector("#play")

    // add two arrays  one for checked Cards and the second one for won Cards 
    const cardsWon = []
    let checkedCards = []
    let checkedCardId = []
    
    // crate the game stage
    function crateGameStage() {
        cardArr.forEach((el, i) => {
            let card = document.createElement('img')
            card.src = 'images/genie.png'
            card.height = 150
            card.width = 150
            card.id = i
            game.appendChild(card)
            card.onclick = flipCard
        });
        //count player moves ++1 foreach click
        moves.innerHTML = 0;
        timer.innerHTML = time + ' sec';
    }

    //timer 
    let time = 60
    const downlodeTimer = setInterval(() => {
        if (time === 0) {
            clearInterval(downlodeTimer);
            audio.muted = true
            return timer.innerHTML = "Game Over"

        } else {
            time = time
        }
        time--;
        timer.innerHTML = time + ' sec'
    }, 1000);

    // now function to flip the cards
    function flipCard() {
        let cardId = this.getAttribute('id')
        checkedCards.push(cardArr[cardId].image)
        checkedCardId.push(cardId)
        this.src = cardArr[cardId].src;
        // if checkedCards have two element then call isMatch function to check them and then if they match correctly then let them locked
        if (checkedCards.length == 2) {
            setTimeout(isMatch, 200)
        }
        moves.innerHTML++;
    }

    //function match cards
    function isMatch() {
        let cards = document.querySelectorAll('img')
        // If double click on the same image with same (...Id...)
        if (checkedCardId[0] === checkedCardId[1]) {
            cards[checkedCardId[0]].src = 'images/genie.png';
            cards[checkedCardId[1]].src = 'images/genie.png';
        } // if click on two images with the same photo (...src value....)
        else if (checkedCards[0] === checkedCards[1]) {
            cards[checkedCardId[0]].src = 'images/end.jpg';
            cards[checkedCardId[1]].src = 'images/end.jpg';
            // if cards match correctly then let them locked (not abel to clicked)
            cards[checkedCardId[0]].removeEventListener('onclick', flipCard)
            cards[checkedCardId[1]].removeEventListener('onclick', flipCard)
            console.log("checkedCards", checkedCards)
            cardsWon.push(checkedCards)
        } else {
            cards[checkedCardId[0]].src = 'images/genie.png';
            cards[checkedCardId[1]].src = 'images/genie.png';
        }
        checkedCards = [];
        checkedCardId = [];
        score.textContent = cardsWon.length
        if (cardsWon.length === cardArr.length / 2 && time > 0) {
            audio.muted = true
            alert("You are Win");
            window.location.reload();
        } else if (cardsWon.length === cardArr.length / 2 && time <= 0) {
            alert("Game Over")
            window.location.reload();
        }
    }

    //randomly sort an array of Cards
    cardArr.sort(() => 0.5 - Math.random())

    crateGameStage()
})


