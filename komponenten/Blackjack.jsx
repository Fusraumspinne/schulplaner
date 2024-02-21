import { Button, Card, InputGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Blackjack() {
    const [coins, setCoins] = useState(0)
    const [geladen, setGeladen] = useState(false)

    useEffect(() => {
        const savedPlanerfarmer = JSON.parse(localStorage.getItem('planerfarmer'));
        if(savedPlanerfarmer){
            setCoins(savedPlanerfarmer.coins);
        }
        setGeladen(true)
    }, []);

    return (
        <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
            <Card.Title className='d-flex mx-3 mt-2 fs-2'>
                <p>Blackjack</p>
            </Card.Title>
            <Card.Body className='row'> 
                
            </Card.Body>
        </Card>
    );
}
