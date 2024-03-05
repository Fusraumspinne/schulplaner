import { Button, Card, InputGroup, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Kryptografie() {
    const [alphabet, setAlphabet] = useState([
        { id: 1, letter: 'A' },
        { id: 2, letter: 'B' },
        { id: 3, letter: 'C' },
        { id: 4, letter: 'D' },
        { id: 5, letter: 'E' },
        { id: 6, letter: 'F' },
        { id: 7, letter: 'G' },
        { id: 8, letter: 'H' },
        { id: 9, letter: 'I' },
        { id: 10, letter: 'J' },
        { id: 11, letter: 'K' },
        { id: 12, letter: 'L' },
        { id: 13, letter: 'M' },
        { id: 14, letter: 'N' },
        { id: 15, letter: 'O' },
        { id: 16, letter: 'P' },
        { id: 17, letter: 'Q' },
        { id: 18, letter: 'R' },
        { id: 19, letter: 'S' },
        { id: 20, letter: 'T' },
        { id: 21, letter: 'U' },
        { id: 22, letter: 'V' },
        { id: 23, letter: 'W' },
        { id: 24, letter: 'X' },
        { id: 25, letter: 'Y' },
        { id: 26, letter: 'Z' },
    ]);

    const [neuAlphabet, setNeuAlphabet] = useState([])

    const [klartext, setKlartext] = useState("")
    const [geheimtext, setGeheimtext] = useState("")

    const [klartextArray, setKlartextArray] = useState([])

    useEffect(() => {
        setNeuAlphabet(alphabet)
    }, [])

    useEffect(() => {
        updateTextArrays(klartext, setKlartextArray);
            
        const klartextZuGeheimtext = klartextArray.map(char => {
            if (char === " ") { 
                return " ";
            }
            const letterObj = neuAlphabet.find(item => item.letter === char)
            const letterObjId = letterObj.id 
            const shiftedAlphabet = shiftAlphabet(alphabet, letterObjId);
            return letterObj ? shiftedAlphabet[letterObjId - 1].letter : char;
        })
    
        setGeheimtext(klartextZuGeheimtext.join('')); 
    }, [klartext]);
    
    const updateTextArrays = (text, setTextArray) => {
        const array = text.toUpperCase().split("");
        setTextArray(array);
    };

    const shiftAlphabet = (alphabet, shiftAmount) => {
        const shiftedAlphabet = [...alphabet];
        for (let i = 0; i < shiftAmount; i++) {
            const shiftedLetter = shiftedAlphabet.shift();
            shiftedAlphabet.push(shiftedLetter);
        }
        return shiftedAlphabet;
    }

    return (
        <div className='container-fluid'>
            <ToastContainer/>
            <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
                <Card.Title className='d-flex ms-3 mt-2 fs-2'>
                    Flopperschlüssel
                </Card.Title>
                <Card.Body> 
                    <p className='fs-3'>Klartext:</p>
                    <InputGroup>
                        <Form.Control placeholder='Klartext' onChange={(e) => setKlartext(e.target.value)} value={klartext}></Form.Control>
                    </InputGroup>
                    <p className='fs-3 mt-5'>Geheimtext:</p>
                    <InputGroup>
                        <Form.Control placeholder='Geheimtext' onChange={(e) => setGeheimtext(e.target.value)} value={geheimtext}></Form.Control>
                    </InputGroup>
                </Card.Body>
            </Card>
        </div>
    );
}
