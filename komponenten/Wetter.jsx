import { Card, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Mitteilungen() {
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
        //fetchWetter();
    }, []);

    return (
        <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
            <Card.Title className='d-flex justify-content-center mt-2 fs-2'>
                Wetter
            </Card.Title>
            <Card.Body>
                {loading ? (
                    <>
                        <p>Laden... Hilfe</p>
                        <Button onClick={fetchWetter} variant='secondary'>Aktualisiern</Button>                    
                    </>
                ) : (
                    <>
                        {wetter.name && (
                            <>
                                <p className='fs-3'>{wetter.name}</p>
                                <p>{"Wetter: " + wetter.weather[0].main}</p>
                                <p>{"Temperatur: " + Math.round(wetter.main.temp) + "°c"}</p>
                                <p>{"min: " + Math.round(wetter.main.temp_min) + "°c" + " | max: " + Math.round(wetter.main.temp_max) + "°c"}</p>
                                <p>{"Luftfeuchtigkeit: " + wetter.main.humidity + "%"}</p>
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
