import { Card, Table } from 'react-bootstrap';
import { useState } from 'react';

export default function Stundenplan() {
    const [stundenPlan, setStundenPlan] = useState({
        stunde: [
            "1",
            "2",
            "",
            "3",
            "4",
            "",
            "5",
            "6",
            "",
            "7",
            "8"
        ],
        montag: [
           "Mathe",
           "Mathe",
           "Pause",
           "Deutsch",
           "Musik",
           "Physik",
           "Pause",
           "Physik",
           "Mittagspause",
           "Bläser",
           "Bläser"
        ],
        dienstag: [
            "Wahlpflichtfach",
            "Wahlpflichtfach",
            "Pause",
            "2.Fremdsprache",
            "Politik",
            "Pause",
            "Geschichte",
            "Religion",
            "Mittagspause" 
        ],
        mittwoch: [
            "Deutsch",
            "Deutsch",
            "Pause",
            "Sport",
            "Chemie",
            "Pause",
            "Geschichte",
            "Politik",
            "Mittagspause" 
        ],
        donnerstag: [
            "Englisch",
            "Englisch",
            "Pause",
            "Sport",
            "Sport",
            "Pause",
            "2.Fremdsprache",
            "2.Fremdsprache",
            "Mittagspause",
            "Biologie",
            "Chemie"
        ],
        freitag: [
            "Wahlpflichtfach",
            "Mathe",
            "Pause",
            "Religion",
            "Englisch",
            "Pause",
            "Biologie",
            "",
            "Mittagspause"
        ]
    });

    return (
        <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
            <Card.Title className='d-flex justify-content-center mt-2 fs-2'>
                Stundenplan
            </Card.Title>
            <Card.Body>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Stunde</th>
                            <th>Montag</th>
                            <th>Dienstag</th>
                            <th>Mittwoch</th>
                            <th>Donnerstag</th>
                            <th>Freitag</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: Math.max(...Object.values(stundenPlan).map(day => day.length)) }).map((_, index) => (
                            <tr key={index}>
                                <td>{stundenPlan.stunde[index]}</td>
                                <td>{stundenPlan.montag[index]}</td>
                                <td>{stundenPlan.dienstag[index]}</td>
                                <td>{stundenPlan.mittwoch[index]}</td>
                                <td>{stundenPlan.donnerstag[index]}</td>
                                <td>{stundenPlan.freitag[index]}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}
