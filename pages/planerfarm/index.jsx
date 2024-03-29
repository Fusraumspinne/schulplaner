import { Button, Card, InputGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Blackjack from "@/komponenten/Blackjack"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Planerfarmer() {
    const [coins, setCoins] = useState(0)
    const [streak, setStreak] = useState(1)
    const [belohnung, setBelohnung] = useState(1000)
    const [lastTime, setLastTime] = useState()
    const [ready, setReady] = useState(true)
    const [geladen, setGeladen] = useState(false)

    const claim = () => {
        const currentTime = new Date();
        currentTime.setHours(0, 0, 0, 0); 
        const lastTimeDate = new Date(lastTime);
        lastTimeDate.setHours(0, 0, 0, 0); 
    
        if (currentTime > lastTimeDate || !lastTime) {
            setStreak(streak + 1);
            setCoins(coins + streak * 1000 * 0.2);
            setLastTime(() => new Date());
            toast.dark('Du hast ' + streak * 1000 * 0.2 + " Coins abgeholt", {
                position: "top-center",
                autoClose: 1500,
                type: "success"
            });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const savedPlanerfarmer = JSON.parse(localStorage.getItem('planerfarmer'));
            if(savedPlanerfarmer){
                setCoins(savedPlanerfarmer.coins);
                setStreak(savedPlanerfarmer.streak);
                setBelohnung(savedPlanerfarmer.belohnung);
                setLastTime(savedPlanerfarmer.lastTime)
            }
            setGeladen(true)
        }, 250); 

        return () => clearInterval(interval);
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
        }
    
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
        <>
            <div className='container-fluid' id='planerfarmer_normal'>
                <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
                    <Card.Title className='d-flex justify-content-between mx-3 mt-2 fs-2'>
                        <p>Planerfarmer</p>
                        <p>Coins: {coins}</p>
                    </Card.Title>
                    <Card.Body className='row'> 
                        <div className='col-6'>
                            <div className='d-flex justify-content-center'>
                                <p className='fs-4'>Daily-Streak</p>
                            </div>
                            <div className="border-top border-2 border-secondary mb-2"></div>
                            {ready ? (
                                <div className='d-flex align-items-center'>
                                    <Button onClick={claim} variant='secondary'>Claim</Button>
                                    <p className='my-0 mx-3 fs-5'>Deine Streak: {streak}</p>
                                    <p className='my-0 mx-3 fs-5'>Deine Belohnung: {streak * belohnung * 0.2}</p>
                                </div>
                            ) : (
                                <div className='d-flex align-items-center'>
                                    <p className='my-0 mx-3 fs-5'>Heute schon abgeholt komm morgen wieder!</p>
                                </div>
                            )}
                        </div>
                        <div className='col-6'>
                            <div className='d-flex justify-content-center'>
                                <p className='fs-4'>Upgrades/PowerUps</p>
                            </div>
                            <div className="border-top border-2 border-secondary mb-2"></div>
                            {/*<div className='d-flex justify-content-between align-items-center'>
                                <p className='my-0 mx-3 fs-5'>Daily-Bonus Upgrade</p>
                                <Button variant='secondary'>Upgrade</Button>
                            </div>*/}
                        </div>
                    </Card.Body>
                </Card>
                <Blackjack/>
            </div>

            <div className='container-fluid' id='planerfarmer_responsive'>
                <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
                    <Card.Title className='mx-3 mt-2 fs-2'>
                        <p>Planerfarmer</p>
                        <p className='fs-3'>Coins: {coins}</p>
                    </Card.Title>
                    <Card.Body> 
                        <div>
                            <div className='d-flex justify-content-center'>
                                <p className='fs-4'>Daily-Streak</p>
                            </div>
                            <div className="border-top border-2 border-secondary mb-2"></div>
                            {ready ? (
                                <div>
                                    <p className='my-1 mx-3 fs-5'>Deine Streak: {streak}</p>
                                    <p className='my-1 mx-3 fs-5'>Deine Belohnung: {streak * belohnung * 0.2}</p>
                                    <Button className='my-1 mb-3 ms-3' onClick={claim} variant='secondary'>Claim</Button>
                                </div>
                            ) : (
                                <div className='d-flex align-items-center'>
                                    <p className='my-0 mx-3 fs-5'>Heute schon abgeholt komm morgen wieder!</p>
                                </div>
                            )}
                        </div>
                        <div>
                            <div className='d-flex justify-content-center'>
                                <p className='fs-4'>Upgrades/PowerUps</p>
                            </div>
                            <div className="border-top border-2 border-secondary mb-2"></div>
                            {/*<div className='d-flex justify-content-between align-items-center'>
                                <p className='my-0 mx-3 fs-5'>Daily-Bonus Upgrade</p>
                                <Button variant='secondary'>Upgrade</Button>
                            </div>*/}
                        </div>
                    </Card.Body>
                </Card>
                <Blackjack/>
            </div>
        </>
    );
}
