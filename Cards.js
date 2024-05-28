// Class for creating a single card
class Card {
    constructor(id, suit, value, power='N/A'){
        this.id=id;
        this.suit=suit;
        this.value=value;
      // Power would accomodate certain games
        this.power=power;
    }
  // All - Display all key / values of the object. Default will only display id and suit
    displayCard(type){
        switch(type){
            case 'All':
                console.log(`${this.id} of ${this.suit} -- Value: ${this.value} -- Power: ${this.power}`);
                break;
            default:
                console.log(`${this.id} of ${this.suit}`);
        }
    }
}

// Class for an entrie deck of card objects
class Deck {
    constructor(mod){
        this.deck=createDeck(mod);
        this.discardPile=[];
    }
  // Calls the displayCard in the card object.. over the entire deck
    displayDeck(type){
        this.deck.forEach(card=>{card.displayCard(type)});
    }
  // shuffle the deck. not the discard pile
    shuffleDeck(){
        let d = this.deck.length, t, i;
        while (d){
            i = Math.floor(Math.random() * d--);
            t=this.deck[d];
            this.deck[d] = this.deck[i];
            this.deck[i] = t;
        }
    }
  // Add a card to the discard pile (array)
    discard(card){
        this.discard.push(card);
    }
}

// Create the deck 
function createDeck(mod='normal'){
    let deck=[];
    let ids=['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King'];
    let suits=['Hearts','Clubs','Spades','Diamonds'];
    let values=[];
    let power;
    switch (mod) {
        case 'cardGolf':
            values.push(1,-2,3,4,5,6,7,8,9,10,10,10,0);
            break;
        default:
            values.push(11,2,3,4,5,6,7,8,9,10,10,10,10);
    }
    for(let s=0; s<suits.length; s++){
        for(let i=0; i<ids.length; i++){
            if (mod==='cardGolf') {
                switch (ids[i]) {
                    case 'Jack':
                        power='Peek';
                        break;
                    case 'Queen':
                        power='Swap';
                        break;
                    default:
                        power='N/A';
                }
            }
            deck.push(new Card(ids[i], suits[s], values[i], power));
        }
    }
    return deck;
}

//UNCOMMENT TO CREATE DECK

// let myDeck=new Deck();
// myDeck.displayDeck('All');
