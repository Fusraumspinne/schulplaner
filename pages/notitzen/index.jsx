import { Button, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Notizen() {
    const [notizen, setNotizen] = useState("");
    const [geladen, setGeladen] = useState(false)

    useEffect(() => {
        const storedNotizen = localStorage.getItem('notizen');
        setNotizen(JSON.parse(storedNotizen));
        setGeladen(true)
    }, []);

    useEffect(() => {
        if(geladen){
            localStorage.setItem('notizen', JSON.stringify(notizen));     
        }
    })

    const save = (e) => {
        setNotizen(e.target.value);
    }

    return (
        <div className='container-fluid'>
            <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
                <Card.Title className='d-flex ms-3 mt-2 fs-2'>
                    Deine Notizen
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
