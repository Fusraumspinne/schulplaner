import { Card, Button, Accordion } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Mitteilungen() {
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
                        <Accordion.Header>Notizen</Accordion.Header>
                        <Accordion.Body>
                            Notizen welche gespeichert werden, um Idenn oder andere wichtige Sachen festzuhalten.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Noten/Zeugnis</Accordion.Header>
                        <Accordion.Body>
                            Dieser Tab soll deine Noten im Blick behalten und eine Art Analyse für einen Durchführen.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Online-Whiteboard in Echtzeit</Accordion.Header>
                        <Accordion.Body>
                            Ein Online-Whiteboard um Spiele zuspieln oder Ideen auszutauschen. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Geburtstage</Accordion.Header>
                        <Accordion.Body>
                            Geburtstage welche man eintragen kann und man dran erinnert wird.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Body>
        </Card>
    );
}
