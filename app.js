document.addEventListener('DOMContentLoaded', () => {

    //opciones de cartas
    const cardarray = [{
            name: 'red',
            img: 'img/red.png'
        },
        {
            name: 'red',
            img: 'img/red.png'
        },
        {
            name: 'yellow',
            img: 'img/yellow.png'
        },
        {
            name: 'yellow',
            img: 'img/yellow.png'
        },
        {
            name: 'blue',
            img: 'img/blue.png'
        },
        {
            name: 'blue',
            img: 'img/blue.png'
        },
        {
            name: 'green',
            img: 'img/green.png'
        },
        {
            name: 'green',
            img: 'img/green.png'
        },
        {
            name: 'pink',
            img: 'img/pink.png'
        },
        {
            name: 'pink',
            img: 'img/pink.png'
        },
        {
            name: 'orange',
            img: 'img/orange.png'
        },
        {
            name: 'orange',
            img: 'img/orange.png'
        }
    ]


    // ordena las cartas de forma aleatoria
    cardarray.sort(() => 0.5 - Math.random())



    //variables
    const grid = document.querySelector('.grid')
    const resultdisplay = document.querySelector('#result')

    var cardschosen = []
    var cardschosenid = []
    var cardswon = []

    //crear funcion para crear el grid

    function createboard() {
        for (let i = 0; i < cardarray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'img/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    //comprobar si coinciden

    function checkformatch() {
        var cards = document.querySelectorAll('img')
        const optiononeid = cardschosenid[0]
        const optiontwoid = cardschosenid[1]

        if (cardschosen[0] === cardschosen[1]) {
            // alert('Vamos, encontraste una pareja')
            cards[optiononeid].setAttribute('src', 'img/blanco.png')
            cards[optiontwoid].setAttribute('src', 'img/blanco.png')
            cardswon.push(cardschosen)
        } else {
            cards[optiononeid].setAttribute('src', 'img/blank.png')
            cards[optiontwoid].setAttribute('src', 'img/blank.png')
                // alert('Lo siento, vuelve intentarlo')
        }

        cardschosen = []
        cardschosenid = []
        resultdisplay.textContent = cardswon.length
        if (cardswon.length === cardarray.length / 2) {
            resultdisplay.textContent = 'Felicidades, las encontraste todas'

        }

    }


    //girar carta
    function flipcard() {
        var cardid = this.getAttribute('data-id')
        cardschosen.push(cardarray[cardid].name)
        cardschosenid.push(cardid)
        this.setAttribute('src', cardarray[cardid].img)

        if (cardschosen.length === 2) {
            setTimeout(checkformatch, 500)
        }
    }

    createboard()


})