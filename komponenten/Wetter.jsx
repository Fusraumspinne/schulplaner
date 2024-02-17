import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function Mitteilungen() {
    return(
        <Card bg='dark' data-bs-theme="dark" className='mx-1 mt-3'>
            <Card.Title className='d-flex justify-content-center mt-2 fs-2'>
                Wetter
            </Card.Title>
            <Card.Body>

            </Card.Body>
        </Card>
    )
}
