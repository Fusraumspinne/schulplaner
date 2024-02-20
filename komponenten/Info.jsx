import { Card, Button, Accordion } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Info() {
    return (
        <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
            <Card.Title className='d-flex justify-content-center mt-2 fs-2'>
                Informationen
            </Card.Title>
            <Card.Body>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Was ist der Informations Tab?</Accordion.Header>
                        <Accordion.Body>
                            In diesem Tab werden anstehende Features vorgestellt, um dem Nutzer zu zeigen, was noch kommen wird.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Wie werden Ihre Daten gespeichert?</Accordion.Header>
                        <Accordion.Body>
                            Jeder Browser besitzt einen lokalen Speicher, welcher Ihre Daten beinhaltet, welche man selber einsehen und bearbeiten kann. Zusammengefasst habe ich also keinen Zugriff auf jegliche Daten, da keine Datenbank zwischengeschaltet ist.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Notizen</Accordion.Header>
                        <Accordion.Body>
                            Verschiedene Settings für Notizen.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Noten/Zeugnis</Accordion.Header>
                        <Accordion.Body>
                            Dieser Tab soll deine Noten im Blick behalten und eine Art Analyse für einen Durchführen.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Online-Whiteboard in Echtzeit</Accordion.Header>
                        <Accordion.Body>
                            Ein Online-Whiteboard um Spiele zuspieln oder Ideen auszutauschen. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Geburtstage</Accordion.Header>
                        <Accordion.Body>
                            Geburtstage welche man eintragen kann und man dran erinnert wird.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Dynamisch</Accordion.Header>
                        <Accordion.Body>
                            Später wird man alles selber konfiguieren können.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Anstehende KA und Events</Accordion.Header>
                        <Accordion.Body>
                            Mitteilungen wenn KA und Events.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>Mini-Spiele</Accordion.Header>
                        <Accordion.Body>
                            Kleine von mir ausgedachte Mini-Spiele.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
    );
}
