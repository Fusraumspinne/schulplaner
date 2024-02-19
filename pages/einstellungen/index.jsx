import { Button, Card, InputGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import mitt from 'next/dist/shared/lib/mitt';

export default function Notizen() {
    const [stundenplan, setStundenplan] = useState(true)
    const [rechner, setRechner] = useState(true)
    const [mitteilungen, setMitteilungen] = useState(true)
    const [wetter, setWetter] = useState(true)
    const [informationen, setInformationen] = useState(true)
    const [geladen, setGeladen] = useState(false)

    useEffect(() => {
        const savedSettings = JSON.parse(localStorage.getItem('settings'));
        setStundenplan(savedSettings.stundenplan);
        setRechner(savedSettings.rechner);
        setMitteilungen(savedSettings.mitteilungen);
        setWetter(savedSettings.wetter);
        setInformationen(savedSettings.informationen);
        setGeladen(true)
    }, []);

    useEffect(() => {
        if(geladen){
            const newSettings = {
                stundenplan: stundenplan,
                rechner: rechner,
                mitteilungen: mitteilungen,
                wetter: wetter,
                informationen: informationen
            };
            localStorage.setItem('settings', JSON.stringify(newSettings));
        }
    }, [stundenplan, rechner, mitteilungen, wetter, informationen]);


    return (
        <div className='container-fluid'>
            <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
                <Card.Title className='d-flex ms-3 mt-2 fs-2'>
                    Einstellungen
                </Card.Title>
                <Card.Body className='row'> 
                    <div className='col-4'>
                        <div className='d-flex justify-content-center'>
                            <p className='fs-3'>Settings</p>
                        </div>
                        <div>
                            <div className="border-top border-2 border-secondary mb-2"></div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='d-flex justify-content-center'>
                            <p className='fs-3'>Idk noch was</p>
                        </div>
                        <div>
                            <div className="border-top border-2 border-secondary mb-2"></div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='d-flex justify-content-center'>
                            <p className='fs-3'>Widgets</p>
                        </div>
                        <div>
                            <div className="border-top border-2 border-secondary mb-2"></div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='fs-5'>Stundenplan</p>
                                <InputGroup.Checkbox className='mb-1' checked={stundenplan} onChange={() => {setStundenplan(!stundenplan)}}></InputGroup.Checkbox>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='fs-5'>Rechner</p>
                                <InputGroup.Checkbox checked={rechner} onChange={() => {setRechner(!rechner)}} className='mb-1'></InputGroup.Checkbox>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='fs-5'>Mitteilungen</p>
                                <InputGroup.Checkbox checked={mitteilungen} onChange={() => {setMitteilungen(!mitteilungen)}} className='mb-1'></InputGroup.Checkbox>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='fs-5'>Wetter</p>
                                <InputGroup.Checkbox checked={wetter} onChange={() => {setWetter(!wetter)}} className='mb-1'></InputGroup.Checkbox>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='fs-5'>Informationen</p>
                                <InputGroup.Checkbox checked={informationen} onChange={() => {setInformationen(!informationen)}} className='mb-1'></InputGroup.Checkbox>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
