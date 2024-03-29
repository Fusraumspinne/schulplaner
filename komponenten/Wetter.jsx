import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Wetter() {
    const [stadt, setStadt] = useState("");
    const [wetter, setWetter] = useState({});
    const [loading, setLoading] = useState(true);

    const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=gladbeck&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

    const fetchWetter = () => {
        axios.get(url)
            .then((response) => {
                setWetter(response.data);
                setLoading(false); 
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching weather data:", error);
                setLoading(false); 
            });
    };

    useEffect(() => {
        fetchWetter();
    }, []);

    return (
        <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
            <Card.Title className='d-flex justify-content-center mt-2 fs-2'>
                Wetter
            </Card.Title>
            <Card.Body>
                {loading ? (
                    <>
                        <p>Laden...</p>
                        <div className='wetter_button'>
                            <Button onClick={fetchWetter} variant='secondary'>Aktualisiern</Button>                    
                        </div>
                    </>
                ) : (
                    <>
                        {wetter.name && (
                            <>
                                <p className='fs-3'>{wetter.name}</p>
                                <div className="border-top border-2 border-secondary mb-2"></div>
                                <p>{"Wetter: " + wetter.weather[0].main}</p>
                                <div className="border-top border-2 border-secondary mb-2"></div>
                                <p>{"Temperatur: " + Math.round(wetter.main.temp) + "°c"}</p>
                                <div className="border-top border-2 border-secondary mb-2"></div>
                                <p>{"min: " + Math.round(wetter.main.temp_min) + "°c" + " | max: " + Math.round(wetter.main.temp_max) + "°c"}</p>
                                <div className="border-top border-2 border-secondary mb-2"></div>
                                <p>{"Luftfeuchtigkeit: " + wetter.main.humidity + "%"}</p>
                                <div className="border-top border-2 border-secondary mb-2"></div>
                                <p>{"Windgeschwindigkeit: " + wetter.wind.speed + "km/h"}</p>
                            </>
                        )}
                        {!wetter.name && (
                            <p>Wetterdaten nicht verfügbar!!!</p>
                        )}
                    </>
                )}
            </Card.Body>
        </Card>
    );
}
