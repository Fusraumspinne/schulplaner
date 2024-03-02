import { useState, useEffect } from 'react';
import { Card, Button, InputGroup, Form } from 'react-bootstrap';
import Link from 'next/link';

export default function Planerfarmerübersicht() {
    const [coins, setCoins] = useState(0)
    const [streak, setStreak] = useState(1)
    const [belohnung, setBelohnung] = useState(1000)
    const [lastTime, setLastTime] = useState()
    const [ready, setReady] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            const savedPlanerfarmer = JSON.parse(localStorage.getItem('planerfarmer'));
            if(savedPlanerfarmer){
                setCoins(savedPlanerfarmer.coins);
                setStreak(savedPlanerfarmer.streak);
                setBelohnung(savedPlanerfarmer.belohnung);
                setLastTime(savedPlanerfarmer.lastTime)
            }
        }, 250); 

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const currentTime = new Date();
        currentTime.setHours(0, 0, 0, 0);
        const lastTimeDate = new Date(lastTime);
        lastTimeDate.setHours(0, 0, 0, 0);
    
        const diffTime = Math.abs(currentTime - lastTimeDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
        if (currentTime > lastTimeDate || !lastTime) {
            setReady(true);
            if (diffDays >= 2) {
                setStreak(1); 
            }
        } else {
            setReady(false);
        }
    });

    return (
        <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
            <Card.Title className='d-flex justify-content-center mt-2 fs-2'>
                Planerfarmerübersicht
            </Card.Title>
            <Card.Body className='row'>
                <div className='col-6'>
                    <div className='d-flex justify-content-center'>
                        <p className='fs-3'>Daily-Streak</p>
                    </div>
                    <div>
                        <div className="border-top border-2 border-secondary mb-2"></div>
                    </div>
                    {ready ? (
                        <div>
                            <p className='my-0 mx-3 fs-5'>Deine Streak: {streak}</p>
                            <p className='my-0 mx-3 fs-5'>Deine Belohnung: {streak * belohnung * 0.2}</p>
                            <Link href="https://schulplaner.vercel.app/planerfarm" legacyBehavior>
                                <Button variant='secondary' className='py-1 my-0 mx-3 my-2 fs-5'>Claim</Button>
                            </Link>
                        </div>
                    ) : (
                        <div className='d-flex align-items-center'>
                            <p className='my-0 mx-3 fs-5'>Heute schon abgeholt komm morgen wieder!</p>
                        </div>
                    )}
                </div>
                <div className='col-6'>
                    <div className='d-flex justify-content-center'>
                        <p className='fs-3'>Stats</p>
                    </div>
                    <div>
                        <div className="border-top border-2 border-secondary mb-2"></div>
                    </div>
                    <div>
                        <p className='my-0 mx-3 fs-5'>Deine Coins: {coins}</p>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}