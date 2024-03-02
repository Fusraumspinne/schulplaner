import { Button, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Notizen() {
    const [notizen, setNotizen] = useState("");
    const [geladen, setGeladen] = useState(false)

    useEffect(() => {
        const storedNotizen = localStorage.getItem('schnellnotizen');
        setNotizen(JSON.parse(storedNotizen));
        setGeladen(true)
    }, []);

    useEffect(() => {
        if(geladen){
            localStorage.setItem('schnellnotizen', JSON.stringify(notizen));     
        }
    })

    const save = (e) => {
        setNotizen(e.target.value);
    }

    return (
        <div>
            <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
                <Card.Title className='d-flex justify-content-center mt-2 fs-2'>
                    Schnellnotizen
                </Card.Title>
                <Card.Body>
                    <textarea 
                        value={notizen} 
                        onChange={save} 
                        className='textarea_notizen' 
                        rows="20"
                    ></textarea>
                </Card.Body>
            </Card>
        </div>
    );
}
