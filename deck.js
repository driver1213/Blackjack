let cards = []
let playerHand = []
let dealerHand = []
let newCard = []
let playerPoints = 0
let dealerPoints = 0
let pAceCount = 0
let dAceCount = 0
let suits = ["S", "H", "D", "C"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = [];
imageUrl = "";

let dealerContainer = document.getElementById('dealer-hand');
let playerContainer = document.getElementById('player-hand');
let dealerPointContainer = document.getElementById('dealer-points');
let playerPointContainer = document.getElementById('player-points');



suits.forEach(function(suit){
    values.forEach(function(value){
        imageUrl = "JPEG/" + value + suit + ".jpg";
        if (value=="J"||value=="Q"||value=="K"){
            value=10;
        }

        else if (value=="A"){
            value=11;
        }
        else{
            value=value;
        };  
        console.log(value);

        let card = { url: imageUrl, value: value }
        deck.push(card);

    })
})
console.log(deck)




function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}




function dealCards(player){
    shuffleArray(deck)

    let newCard = document.createElement('img')
    let card = deck.pop()
    newCard.setAttribute("src", card.url)
    console.log(newCard)
    if (player == "dealer-hand") {
        dealerContainer.append(newCard)
        dealerHand.push(card)
        console.log('dealer')
    }
    else if (player == "player-hand") {
        playerContainer.append(newCard)
        playerHand.push(card)
        console.log('player')
    }
    

}






function calculatePoints(player, hand){
    let handValue = 0;

    console.log(player)

    for (var i = 0; i <= hand.length; i++) {
        handValue += hand[i].value
    }

    playerPoints = handValue // add handvalue to player's total score
    
}
console.log(calculatePoints)








if(newCard.value == 11){ //count Aces
    player.pAceCount++;     


player.playerPoints = player.value + player.playerPoints;

if((player.playerPoints>21) && (player.pAceCount>0)){
    player.playerPoints = player.playerPoints-10;
    player.pAceCount = player.pAceCount -1;
}

else if(playerPoints>21){
    player.playerPointContainer.textContent = player.playerPoints + " Over 21!! You Lose!!";    
}
else if(playerPoints==21){
    player.playerPointContainer.textContent="You got 21! You Win!"
}
else{
    player.playerPointContainer.textContent= player.playerPoints+" Points";
}
}



// document.getElementById("dealer-hand").addEventListener('click', function(e){
    
// })

// document.getElementById("player-hand").addEventListener('click', function(e){
    
    
// })

document.getElementById("deal-button").addEventListener('click', function(e){
    
    dealCards("dealer-hand")
    dealCards("player-hand")
    dealCards("dealer-hand")
    dealCards("player-hand")
    calculatePoints("player-points")

})

document.getElementById("hit-button").addEventListener('click', function(e){
    
    dealCards("player-hand")
    calculatePoints("player-points")
})

document.getElementById("stand-button").addEventListener('click', function(e){

    
})














// let deck = [
// {suit: "Diamonds", value: 2, imageURL: "JPEG/2D.jpg"}, 
// {suit: "Diamonds", value: 3, imageURL: "JPEG/3D.jpg"},
// {suit: "Diamonds", value: 4, imageURL: "JPEG/4D.jpg"}, 
// {suit: "Diamonds", value: 5, imageURL: "JPEG/5D.jpg"},
// {suit: "Diamonds", value: 6, imageURL: "JPEG/6D.jpg"},
// {suit: "Diamonds", value: 7, imageURL: "JPEG/7D.jpg"},
// {suit: "Diamonds", value: 8, imageURL: "JPEG/8D.jpg"},
// {suit: "Diamonds", value: 9, imageURL: "JPEG/9D.jpg"},
// {suit: "Diamonds", value: 10, imageURL: "JPEG/10D.jpg"},
// {suit: "Diamonds", value: "J", imageURL: "JPEG/JD.jpg"},
// {suit: "Diamonds", value: "Q", imageURL: "JPEG/QD.jpg"},
// {suit: "Diamonds", value: "K", imageURL: "JPEG/KD.jpg"},
// {suit: "Diamonds", value: "A", imageURL: "JPEG/AD.jpg"},
// {suit: "Hearts", value: 2, imageURL: "JPEG/2H.jpg"}, 
// {suit: "Hearts", value: 3, imageURL: "JPEG/3H.jpg"},
// {suit: "Hearts", value: 4, imageURL: "JPEG/4H.jpg"}, 
// {suit: "Hearts", value: 5, imageURL: "JPEG/5H.jpg"},
// {suit: "Hearts", value: 6, imageURL: "JPEG/6H.jpg"},
// {suit: "Hearts", value: 7, imageURL: "JPEG/7H.jpg"},
// {suit: "Hearts", value: 8, imageURL: "JPEG/8H.jpg"},
// {suit: "Hearts", value: 9, imageURL: "JPEG/9H.jpg"},
// {suit: "Hearts", value: 10, imageURL: "JPEG/10H.jpg"},
// {suit: "Hearts", value: "J", imageURL: "JPEG/JH.jpg"},
// {suit: "Hearts", value: "Q", imageURL: "JPEG/QH.jpg"},
// {suit: "Hearts", value: "K", imageURL: "JPEG/KH.jpg"},
// {suit: "Hearts", value: "A", imageURL: "JPEG/AH.jpg"},
// {suit: "Clovers", value: 2, imageURL: "JPEG/2C.jpg"}, 
// {suit: "Clovers", value: 3, imageURL: "JPEG/3C.jpg"},
// {suit: "Clovers", value: 4, imageURL: "JPEG/4C.jpg"}, 
// {suit: "Clovers", value: 5, imageURL: "JPEG/5C.jpg"},
// {suit: "Clovers", value: 6, imageURL: "JPEG/6C.jpg"},
// {suit: "Clovers", value: 7, imageURL: "JPEG/7C.jpg"},
// {suit: "Clovers", value: 8, imageURL: "JPEG/8C.jpg"},
// {suit: "Clovers", value: 9, imageURL: "JPEG/9C.jpg"},
// {suit: "Clovers", value: 10, imageURL: "JPEG/10C.jpg"},
// {suit: "Clovers", value: "J", imageURL: "JPEG/JC.jpg"},
// {suit: "Clovers", value: "Q", imageURL: "JPEG/QC.jpg"},
// {suit: "Clovers", value: "K", imageURL: "JPEG/KC.jpg"},
// {suit: "Clovers", value: "A", imageURL: "JPEG/AC.jpg"},
// {suit: "Spades", value: 2, imageURL: "JPEG/2S.jpg"}, 
// {suit: "Spades", value: 3, imageURL: "JPEG/3S.jpg"},
// {suit: "Spades", value: 4, imageURL: "JPEG/4S.jpg"}, 
// {suit: "Spades", value: 5, imageURL: "JPEG/5S.jpg"},
// {suit: "Spades", value: 6, imageURL: "JPEG/6S.jpg"},
// {suit: "Spades", value: 7, imageURL: "JPEG/7S.jpg"},
// {suit: "Spades", value: 8, imageURL: "JPEG/8S.jpg"},
// {suit: "Spades", value: 9, imageURL: "JPEG/9S.jpg"},
// {suit: "Spades", value: 10, imageURL: "JPEG/10S.jpg"},
// {suit: "Spades", value: "J", imageURL: "JPEG/JS.jpg"},
// {suit: "Spades", value: "Q", imageURL: "JPEG/QS.jpg"},
// {suit: "Spades", value: "K", imageURL: "JPEG/KS.jpg"},
// {suit: "Spades", value: "A", imageURL: "JPEG/AS.jpg"}
// ]

// console.log(deck)

