import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Mitteilungen() {
    const [hausaufgaben, setHausaufgaben] = useState([]);

    useEffect(() => {
        const storedHausaufgaben = localStorage.getItem('hausaufgaben');
        if (storedHausaufgaben) {
            setHausaufgaben(JSON.parse(storedHausaufgaben));
        }
    }, []);

    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = `${d.getMonth() + 1}`.padStart(2, '0');
        const day = `${d.getDate()}`.padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const today = formatDate(new Date());

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = formatDate(tomorrow);

    const hausafgabenMorgenNichtErledigt = hausaufgaben.filter(aufgabe => aufgabe.datum === tomorrowFormatted && !aufgabe.erledigt);

    return (
        <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
            <Card.Title className='d-flex justify-content-center mt-2 fs-2'>
                Mitteilungen
            </Card.Title>
            <Card.Body>
                <p style={{color:"red", textDecoration:"underline", fontWeight:"600"}}>Bisher ist die Nutzung der Website nicht auf Handys möglich, da das Design noch nicht kompatibel ist!</p>
                {hausafgabenMorgenNichtErledigt.length > 0 ? (
                    hausafgabenMorgenNichtErledigt.map((aufgabe, index) => (
                        <div key={index}>
                            <p><span>Die Hausaufgabe: </span> <span style={{ fontWeight: "700" }}>{aufgabe.aufgabe}</span> muss in <span style={{ fontWeight: "700" }}>{aufgabe.fach}</span> für morgen gemacht werden!</p>
                        </div>
                    ))
                ) : (
                    <p>Keine (nicht erledigten) Hausaufgaben für morgen.</p>
                )}
            </Card.Body>
        </Card>
    );
}