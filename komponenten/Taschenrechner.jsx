import { useState } from 'react';
import { Card, Button, InputGroup, Form } from 'react-bootstrap';

export default function Taschenrechner() {
    const [displayValue, setDisplayValue] = useState('');

    const addToDisplay = (value) => {
        setDisplayValue(displayValue + value);
    };

    const clearDisplay = () => {
        setDisplayValue('');
    };

    const deleteLastCharacter = () => {
        setDisplayValue(displayValue.slice(0, -1));
    };

    const calculateResult = () => {
        try {
            const result = eval(displayValue);
            setDisplayValue(result.toString());
        } catch (error) {
            setDisplayValue('Error');
        }
    };

    return (
        <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3 taschenrechner_container'>
            <Card.Title className='d-flex justify-content-center mt-2 fs-2'>
                Taschenrechner
            </Card.Title>
            <Card.Body>
                <div className='d-flex justify-content-center'>
                    <div className='rechner'>
                        <div className='d-flex justify-content-center'>
                            <div className='container_output'>
                                <Form.Control className='taschenrechner_output' value={displayValue} readOnly/>
                            </div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={clearDisplay}>AC</Button>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={deleteLastCharacter}>DE</Button>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('.')}>.</Button>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('/')}>/</Button>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('7')}>7</Button>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('8')}>8</Button>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('9')}>9</Button>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('*')}>*</Button>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('4')}>4</Button>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('5')}>5</Button>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('6')}>6</Button>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('-')}>-</Button>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('1')}>1</Button>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('2')}>2</Button>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('3')}>3</Button>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('+')}>+</Button>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('00')}>00</Button>
                            <Button className='taschenrechner_btn' variant='secondary' onClick={() => addToDisplay('0')}>0</Button>
                            <Button className='result_btn' variant='secondary' onClick={calculateResult}>=</Button>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}