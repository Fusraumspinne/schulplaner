import { Button, Card, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Image from 'next/image';

// Define card values and types
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const TYPES = ["C", "D", "H", "S"];

// Function to build the deck
const buildDeck = () => {
    const deck = [];
    for (let type of TYPES) {
        for (let value of VALUES) {
            deck.push(`${value}-${type}`);
        }
    }
    return deck;
};

// Function to shuffle the deck
const shuffleDeck = (deck) => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
};

const Blackjack = () => {
    let [coins, setCoins] = useState(0);
    const [streak, setStreak] = useState(0)
    const [belohnung, setBelohnung] = useState(0)
    const [lastTime, setLastTime] = useState()
    const [geladen, setGeladen] = useState(false);
    const [wetteinsatz, setWetteinsatz] = useState(0)
    const [spielen, setSpielen] = useState(false)
    const [deck, setDeck] = useState([]);
    const [dealerCards, setDealerCards] = useState([]);
    const [yourCards, setYourCards] = useState([]);
    const [dealerSum, setDealerSum] = useState(0);
    const [yourSum, setYourSum] = useState(0);
    const [dealerAceCount, setDealerAceCount] = useState(0);
    const [yourAceCount, setYourAceCount] = useState(0);
    const [hidden, setHidden] = useState('');
    const [canHit, setCanHit] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const savedPlanerfarmer = JSON.parse(localStorage.getItem('planerfarmer'));
        if(savedPlanerfarmer){
            setCoins(savedPlanerfarmer.coins);
            setStreak(savedPlanerfarmer.streak);
            setBelohnung(savedPlanerfarmer.belohnung);
            setLastTime(savedPlanerfarmer.lastTime)
        }
        setGeladen(true)

        const newDeck = buildDeck();
        shuffleDeck(newDeck);
        setDeck(newDeck);

        startGame(newDeck);
    }, []);

    useEffect(() => {
        if (geladen) {
            const newPlanerfarmer = {
                coins: coins,
                streak: streak,
                belohnung: belohnung,
                lastTime: lastTime
            };
            localStorage.setItem('planerfarmer', JSON.stringify(newPlanerfarmer));
            console.log(coins)
        }
    });

    const startGame = (deck) => {
        const newDealerCards = [];
        const newYourCards = [];

        let dealerSum = 0;
        let yourSum = 0;
        let dealerAceCount = 0;
        let yourAceCount = 0;

        let hidden = deck.pop();
        dealerSum += getValue(hidden);
        dealerAceCount += checkAce(hidden);
        setHidden(hidden);

        // Deal cards to dealer
        while (dealerSum < 17) {
            let card = deck.pop();
            dealerSum += getValue(card);
            dealerAceCount += checkAce(card);
            newDealerCards.push(card);
        }

        // Deal cards to player
        for (let i = 0; i < 2; i++) {
            let card = deck.pop();
            yourSum += getValue(card);
            yourAceCount += checkAce(card);
            newYourCards.push(card);
        }

        setDealerCards(newDealerCards);
        setYourCards(newYourCards);
        setDealerSum(dealerSum);
        setYourSum(yourSum);
        setDealerAceCount(dealerAceCount);
        setYourAceCount(yourAceCount);
    };

    const hit = () => {
        if (!canHit || gameOver) {
            return;
        }

        const newYourCards = [...yourCards];
        let card = deck.pop();
        newYourCards.push(card);
        setYourCards(newYourCards);

        let cardValue = getValue(card);
        let newYourSum = yourSum + cardValue;
        let newYourAceCount = yourAceCount + checkAce(card);

        // Reduce ace value if necessary
        while (newYourSum > 21 && newYourAceCount > 0) {
            newYourSum -= 10;
            newYourAceCount--;
        }

        setYourSum(newYourSum);
        setYourAceCount(newYourAceCount);

        if (newYourSum > 21) {
            setCanHit(false);
            setGameOver(true);
            setMessage('Du hast verloren!');
            setCoins(coins - wetteinsatz)
        }
    };

    const stay = () => {
        setCanHit(false);
        setGameOver(true);

        // Dealer's turn
        let newDealerSum = dealerSum;
        let newDealerAceCount = dealerAceCount;
        let hiddenCardValue = getValue(hidden);

        while (newDealerSum < 17) {
            let card = deck.pop();
            newDealerSum += getValue(card);
            newDealerAceCount += checkAce(card);
        }

        // Reduce ace value if necessary
        while (newDealerSum > 21 && newDealerAceCount > 0) {
            newDealerSum -= 10;
            newDealerAceCount--;
        }

        // Determine winner
        if (yourSum > 21 || (newDealerSum <= 21 && newDealerSum > yourSum)) {
            setMessage('Du hast verloren!');
            setCoins(coins - wetteinsatz)
        } else if (newDealerSum > 21 || newDealerSum < yourSum) {
            setMessage('Du hast gewonnen!');
            setCoins(parseInt(coins) + parseInt(wetteinsatz)); 
        } else {
            setMessage('Unentschiden!');
        }

        setDealerSum(newDealerSum);
        setDealerAceCount(newDealerAceCount);
    };

    const getValue = (card) => {
        let value = card.split("-")[0];
        if (isNaN(value)) {
            return value === "A" ? 11 : 10;
        }
        return parseInt(value);
    };

    const checkAce = (card) => {
        return card[0] === "A" ? 1 : 0;
    };

    return (
        <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
            <Card.Title className='d-flex mx-3 mt-2 fs-2'>
                <p>Blackjack</p>
            </Card.Title>
            <Card.Body>
                {spielen ? (
                    <>
                        <div className='row'>
                            <div className='col-6'>
                                {gameOver ? (
                                    <>
                                        <p className='fs-3'>Dealer: <span>{dealerSum}</span></p>
                                        <div id='dealer-cards'>
                                            {dealerCards.map((card, index) => (
                                                <Image key={index} priority="1" alt='Dealer Card' src={`/card/${card}.png`} width={100} height={150} />
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <p className='fs-3'>Dealer: ?</p>
                                        <div>
                                            
                                        </div>
                                    </>
                                )}
                            </div>
                            <div className='col-6'>
                                <p className='fs-3'>You: <span>{yourSum}</span></p> 
                                <div id='your-cards'>
                                    {yourCards.map((card, index) => (
                                        <Image key={index} priority="1" alt='Your Card' src={`/card/${card}.png`} width={100} height={150} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center mt-5'>
                            <Button variant='secondary' className='mx-3' onClick={hit}>Hit</Button>
                            <Button variant='secondary' className='mx-3' onClick={stay}>Stay</Button>  
                            <p className='my-0 mx-3 fs-5' id='results'>{gameOver ? `Ergebnis: ${message}` : ''}</p>
                            <p className='my-0 mx-3 fs-5'>{gameOver ? `Bitte laden sie dei Seite neu!` : ''}</p>
                        </div>
                    </>
                ) : (
                    <div>
                        <InputGroup>
                            <Form.Control 
                                max={coins} 
                                type='number' 
                                placeholder='Betrag' 
                                onChange={(e) => setWetteinsatz(e.target.value)} 
                                value={wetteinsatz}
                            />
                        </InputGroup>
                        {wetteinsatz > coins || wetteinsatz === 0 ? ( 
                            <Button className='mt-3' variant='secondary' disabled> // Button deaktivieren, wenn der Wetteinsatz zu hoch ist oder 0 beträgt
                                {wetteinsatz > coins ? 'Wetteinsatz zu hoch' : 'Wetteinsatz eingeben'}
                            </Button>
                        ) : (
                            <Button className='mt-3' variant='secondary' onClick={() => setSpielen(true)}>Spielen</Button>
                        )}
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default Blackjack;
