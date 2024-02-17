import { Button, Card, Table, InputGroup, CloseButton, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Hausaufgaben() {

    const [fach, setFach] = useState("");
    const [datum, setDatum] = useState("");
    const [aufgabe, setAufgabe] = useState("");
    const [hausaufgaben, setHausaufgaben] = useState([]);

    useEffect(() => {
        const storedHausaufgaben = localStorage.getItem('hausaufgaben');
        if (storedHausaufgaben) {
            setHausaufgaben(JSON.parse(storedHausaufgaben));
        }
    }, []);

    const add = () => {
        if (fach && datum && aufgabe) {
            const newHausaufgabe = {
                fach: fach,
                datum: datum,
                aufgabe: aufgabe,
                erledigt: false
            };
            setHausaufgaben([...hausaufgaben, newHausaufgabe]);
            setFach("");
            setDatum("");
            setAufgabe("");
            localStorage.setItem('hausaufgaben', JSON.stringify([...hausaufgaben, newHausaufgabe]));
        } else {
            alert("Bitte füllen Sie alle Felder aus.");
        }
    }

    const toggleErledigt = (index) => {
        const updatedHausaufgaben = [...hausaufgaben];
        updatedHausaufgaben[index].erledigt = !updatedHausaufgaben[index].erledigt;
        setHausaufgaben(updatedHausaufgaben);
        localStorage.setItem('hausaufgaben', JSON.stringify(updatedHausaufgaben));
    }

    const removeAufgabe = (index) => {
        const updatedHausaufgaben = [...hausaufgaben];
        updatedHausaufgaben.splice(index, 1); 
        setHausaufgaben(updatedHausaufgaben); 
        localStorage.setItem('hausaufgaben', JSON.stringify(updatedHausaufgaben)); 
    }    

    return (
        <Card bg='dark' data-bs-theme="dark" className='mx-3 mt-3'>
            <Card.Body>
                <div className='row mt-4'>
                    <div className='col-9'>
                        <InputGroup className="mb-1">
                            <Form.Control placeholder='Fach' value={fach} onChange={(e) => setFach(e.target.value)}/>
                            <DropdownButton variant="outline-secondary" title="Fächer" id="input-group-dropdown-2" align="end">
                                <Dropdown.Item href="#" onClick={() => setFach("Biologie")}>Biologie</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setFach("Chemie")}>Chemie</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setFach("Deutsch")}>Deutsch</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setFach("Englisch")}>Englisch</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setFach("Geschichte")}>Geschichte</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setFach("Kunst")}>Kunst</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setFach("Mathe")}>Mathe</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setFach("Musik")}>Musik</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setFach("Physik")}>Physik</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setFach("Politik")}>Politik</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setFach("Religion/PP")}>Religion/PP</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setFach("Sport")}>Sport</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setFach("Wahlpflichtfach")}>Wahlpflichtfach</Dropdown.Item>
                                <Dropdown.Item href="#" onClick={() => setFach("2.Fremdsprache")}>2.Fremdsprache</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                    </div>
                    <div className='col-3'>
                        <input type="date" onChange={(e) => setDatum(e.target.value)} value={datum} className="form-control" placeholder="Datum"/>
                    </div>
                </div>
                <div className='row mb-4 mt-2'>
                    <div className='col-9'>
                        <input type="text" onChange={(e) => setAufgabe(e.target.value)} value={aufgabe} className="form-control" placeholder="Aufgabe"/>
                    </div>
                    <div className='col-3'>
                        <Button variant='secondary' onClick={add}>Hinzufügen</Button>
                    </div>
                </div>
                
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Fach</th>
                            <th>Aufgabe</th>
                            <th>Erledigt</th>
                            <th>Datum</th>
                            <th className='d-flex justify-content-center'><CloseButton /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {hausaufgaben.map((hausaufgabe, index) => (
                            <tr key={index}>
                                <td>{hausaufgabe.fach}</td>
                                <td>{hausaufgabe.aufgabe}</td>
                                <td className='d-flex justify-content-center'><InputGroup.Checkbox className='mb-1' checked={hausaufgabe.erledigt} onChange={() => toggleErledigt(index)} /></td>
                                <td>{hausaufgabe.datum}</td>
                                <td className='d-flex justify-content-center'><Button variant='secondary' onClick={() => removeAufgabe(index)}>X</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
}