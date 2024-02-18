import { Button, Card, Table, InputGroup, CloseButton, Form, DropdownButton, Dropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Notizen() {
    return (
        <div className='container-fluid'>
            <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
            <Card.Body>
                <textarea className='textarea_notizen' rows="20"></textarea>
            </Card.Body>
        </Card>
        </div>
        
    );
}