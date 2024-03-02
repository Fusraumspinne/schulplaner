import { Button, Card, InputGroup } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Notizen() {
    const [stundenplan, setStundenplan] = useState(true)
    const [rechner, setRechner] = useState(true)
    const [mitteilungen, setMitteilungen] = useState(true)
    const [wetter, setWetter] = useState(true)
    const [informationen, setInformationen] = useState(true)
    const [planerfarmerübersicht, setPlanerfarmerübersicht] = useState(true)
    const [geladen, setGeladen] = useState(false)

    useEffect(() => {
        const savedSettings = JSON.parse(localStorage.getItem('settings'));
        if(savedSettings){
            setStundenplan(savedSettings.stundenplan);
            setRechner(savedSettings.rechner);
            setMitteilungen(savedSettings.mitteilungen);
            setWetter(savedSettings.wetter);
            setInformationen(savedSettings.informationen);
            setPlanerfarmerübersicht(savedSettings.planerfarmerübersicht)
        }
        setGeladen(true)
    }, []);

    useEffect(() => {
        if(geladen){
            const newSettings = {
                stundenplan: stundenplan,
                rechner: rechner,
                mitteilungen: mitteilungen,
                wetter: wetter,
                informationen: informationen,
                planerfarmerübersicht: planerfarmerübersicht
            };
            localStorage.setItem('settings', JSON.stringify(newSettings));
        }
    }, [stundenplan, rechner, mitteilungen, wetter, informationen, planerfarmerübersicht]);

    const toogle = (fach, wert) => {
        if(fach === "stundenplan"){
            setStundenplan(wert)
            if (wert) {
                toast.dark('Stundenplan wurde hinzugefügt', {
                    position: "top-center",
                    autoClose: 1500,
                    type: "success"
                });
            } else {
                toast.dark('Stundenplan wurde entfernt', {
                    position: "top-center",
                    autoClose: 1500,
                    type: "error"
                });
            }
        } else if(fach === "rechner"){
            setRechner(wert)
            if (wert) {
                toast.dark('Rechner wurde hinzugefügt', {
                    position: "top-center",
                    autoClose: 1500,
                    type: "success"
                });
            } else {
                toast.dark('Rechner wurde entfernt', {
                    position: "top-center",
                    autoClose: 1500,
                    type: "error"
                });
            }
        } else if(fach === "mitteilung"){
            setMitteilungen(wert)
            if (wert) {
                toast.dark('Mitteilungen wurde hinzugefügt', {
                    position: "top-center",
                    autoClose: 1500,
                    type: "success"
                });
            } else {
                toast.dark('Mitteilungen wurde entfernt', {
                    position: "top-center",
                    autoClose: 1500,
                    type: "error"
                });
            }
        } else if(fach === "wetter") {
            setWetter(wert)
            if (wert) {
                toast.dark('Wetter wurde hinzugefügt', {
                    position: "top-center",
                    autoClose: 1500,
                    type: "success"
                });
            } else {
                toast.dark('Wetter wurde entfernt', {
                    position: "top-center",
                    autoClose: 1500,
                    type: "error"
                });
            }
        } else if(fach === "informationen"){
            setInformationen(wert)
            if (wert) {
                toast.dark('Informationen wurde hinzugefügt', {
                    position: "top-center",
                    autoClose: 1500,
                    type: "success"
                });
            } else {
                toast.dark('Informationen wurde entfernt', {
                    position: "top-center",
                    autoClose: 1500,
                    type: "error"
                });
            }
        } else if (fach === "planerfarmerübersicht"){
            setPlanerfarmerübersicht(wert)
            if (wert) {
                toast.dark('Planerfarmerübersicht wurde hinzugefügt', {
                    position: "top-center",
                    autoClose: 1500,
                    type: "success"
                });
            } else {
                toast.dark('Planerfaremrübersicht wurde entfernt', {
                    position: "top-center",
                    autoClose: 1500,
                    type: "error"
                });
            }
        }
    }

    return (
        <div className='container-fluid'>
            <ToastContainer/>
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
                                <InputGroup.Checkbox className='mb-1' checked={stundenplan} onChange={() => {toogle("stundenplan", !stundenplan)}}></InputGroup.Checkbox>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='fs-5'>Rechner</p>
                                <InputGroup.Checkbox checked={rechner} onChange={() => {toogle("rechner",!rechner)}} className='mb-1'></InputGroup.Checkbox>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='fs-5'>Mitteilungen</p>
                                <InputGroup.Checkbox checked={mitteilungen} onChange={() => {toogle("mitteilung",!mitteilungen)}} className='mb-1'></InputGroup.Checkbox>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='fs-5'>Wetter</p>
                                <InputGroup.Checkbox checked={wetter} onChange={() => {toogle("wetter",!wetter)}} className='mb-1'></InputGroup.Checkbox>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='fs-5'>Informationen</p>
                                <InputGroup.Checkbox checked={informationen} onChange={() => {toogle("informationen",!informationen)}} className='mb-1'></InputGroup.Checkbox>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <p className='fs-5'>Planerfarmerübersicht</p>
                                <InputGroup.Checkbox checked={planerfarmerübersicht} onChange={() => {toogle("planerfarmerübersicht",!planerfarmerübersicht)}} className='mb-1'></InputGroup.Checkbox>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
