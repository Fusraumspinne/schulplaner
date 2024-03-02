import { Button, Card, Form, FormControl, InputGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Blackjack() {
    const [coins, setCoins] = useState(0);
    const [streak, setStreak] = useState(1)
    const [belohnung, setBelohnung] = useState(0)
    const [lastTime, setLastTime] = useState()
    const [wetteinsatz, setWetteinsatz] = useState(1)
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

    const buildDeck = () => {
        const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        const types = ["C", "D", "H", "S"];
        const deck = [];
        for (let type of types) {
            for (let value of values) {
                deck.push(`${value}-${type}`);
            }
        }
        return deck;
    };

    const shuffleDeck = (deck) => {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
    };

    useEffect(() => {
        const newDeck = buildDeck();
        shuffleDeck(newDeck);
        setDeck(newDeck);
        
        startGame(newDeck);
    }, []);

    useEffect(() => {
        const savedPlanerfarmer = JSON.parse(localStorage.getItem('planerfarmer'));
        if(savedPlanerfarmer){
            setCoins(savedPlanerfarmer.coins);
            setStreak(savedPlanerfarmer.streak);
            setBelohnung(savedPlanerfarmer.belohnung);
            setLastTime(savedPlanerfarmer.lastTime)
        }
    })

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

        while (dealerSum < 17) {
            let card = deck.pop();
            dealerSum += getValue(card);
            dealerAceCount += checkAce(card);
            newDealerCards.push(card);
        }

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

    const resetGame = () => {
        setSpielen(false);
        setYourCards([]);
        setDealerCards([]);
        setYourSum(0);
        setDealerSum(0);
        setYourAceCount(0);
        setDealerAceCount(0);
        setCanHit(true);
        setGameOver(false);
    
        if (deck.length < 15) {
            const newDeck = buildDeck();
            shuffleDeck(newDeck);
            setDeck(newDeck); 
        }
    
        startGame(deck);
        console.log(deck)
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

        while (newYourSum > 21 && newYourAceCount > 0) {
            newYourSum -= 10;
            newYourAceCount--;
        }

        setYourSum(newYourSum);
        setYourAceCount(newYourAceCount);

        if (newYourSum > 21) {
            setCanHit(false);
            setGameOver(true);
            
            const newPlanerfarmer = {
                coins: parseInt(coins) - parseInt(wetteinsatz), 
                streak: streak,
                belohnung: belohnung,
                lastTime: lastTime
            }; 

            localStorage.setItem('planerfarmer', JSON.stringify(newPlanerfarmer)); 

            toast.dark('Du hast ' + parseInt(wetteinsatz) + " Coins verloren", {
                position: "top-center",
                autoClose: 1500,
                type: "error"
            });
        }
    };

    const stay = () => {
        setCanHit(false);
        setGameOver(true);

        let newDealerSum = dealerSum;
        let newDealerAceCount = dealerAceCount;
        let hiddenCardValue = getValue(hidden);

        while (newDealerSum < 17) {
            let card = deck.pop();
            newDealerSum += getValue(card);
            newDealerAceCount += checkAce(card);
        }

        while (newDealerSum > 21 && newDealerAceCount > 0) {
            newDealerSum -= 10;
            newDealerAceCount--;
        }

        if (yourSum > 21 || (newDealerSum <= 21 && newDealerSum > yourSum)) {
            const newPlanerfarmer = {
                coins: parseInt(coins) - parseInt(wetteinsatz), 
                streak: streak,
                belohnung: belohnung,
                lastTime: lastTime
            }; 

            localStorage.setItem('planerfarmer', JSON.stringify(newPlanerfarmer)); 

            toast.dark('Du hast ' + parseInt(wetteinsatz) + " Coins verloren", {
                position: "top-center",
                autoClose: 1500,
                type: "error"
            });
        } else if (newDealerSum > 21 || newDealerSum < yourSum) {
            const newPlanerfarmer = {
                coins: parseInt(coins) + parseInt(wetteinsatz), 
                streak: streak,
                belohnung: belohnung,
                lastTime: lastTime
            }; 

            localStorage.setItem('planerfarmer', JSON.stringify(newPlanerfarmer)); 

            toast.dark('Du hast ' + parseInt(wetteinsatz) + " Coins gewonnen", {
                position: "top-center",
                autoClose: 1500,
                type: "success"
            });
        } else {
            toast.dark('Unentschieden', {
                position: "top-center",
                autoClose: 1500,
                type: "warning"
            });
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
            <ToastContainer/>
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
                            {gameOver ? (
                                <Button variant='secondary' onClick={resetGame}>Nocheinmal spielen</Button>
                            ) : (
                                <Button style={{display:"none"}} variant='secondary' onClick={resetGame}>Nocheinmal spielen</Button>
                            )}
                           
                        </div>
                    </>
                ) : (  
                    <div>
                          <InputGroup>
                             <Form.Control 
                                 max={coins}
                                 min={1}
                                 type='number' 
                                 placeholder='Betrag' 
                                 onChange={(e) => setWetteinsatz(e.target.value)} 
                                 value={wetteinsatz}
                             />
                         </InputGroup>
                        {wetteinsatz > coins || wetteinsatz === 0 ? ( 
                            <Button className='mt-3' variant='secondary' disabled> // Button deaktivieren, wenn der Wetteinsatz zu hoch ist oder 0 beträgt</Button>
                        ) : (
                            <Button className='mt-3' variant='secondary' onClick={() => setSpielen(true)}>Spielen</Button>
                        )}
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};
