import Link from "next/link"
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navigation() {

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Schulplaner</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Startseite</Nav.Link>
                        <Nav.Link href="/hausaufgaben/">Hausaufgaben</Nav.Link>
                        <Nav.Link href="/">Notizen</Nav.Link>
                        <Nav.Link href="/">Noten/Zeugnis</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="weitere Links" id="basic-nav-dropdown" bg="primary">
                            <NavDropdown.Item href="https://chat.openai.com/auth/login" target="_blank">ChatGPT</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.google.com/search?client=opera&q=übersetzer&sourceid=opera&ie=UTF-8&oe=UTF-8" target="_blank">Übersetzter</NavDropdown.Item>
                            <NavDropdown.Item href="https://riesener-gym.de/iserv/auth/login?_target_path=/iserv/auth/auth?_iserv_app_url%3D%252Fiserv%252F%26client_id%3D50_3c28dnrgprc4scgswk8ogs000g0kkw44c880k0cwco0wwkwoo4%26nonce%3Daf36ec0e-fb81-419e-a5d9-7bde1dad844d%26redirect_uri%3Dhttps%253A%252F%252Friesener-gym.de%252Fiserv%252Fapp%252Fauthentication%252Fredirect%26response_type%3Dcode%26scope%3Dopenid%2520uuid%2520iserv%253Asession-id%2520iserv%253Aweb-ui%2520iserv%253A2fa%253Aconfiguration%2520iserv%253Aaccess-groups%26state%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6IjEifQ.eyJyZWRpcmVjdF91cmkiOiJodHRwczpcL1wvcmllc2VuZXItZ3ltLmRlXC9pc2VydlwvIiwibm9uY2UiOiJhZjM2ZWMwZS1mYjgxLTQxOWUtYTVkOS03YmRlMWRhZDg0NGQiLCJhZG1pbiI6ZmFsc2UsImlzcyI6Imh0dHBzOlwvXC9yaWVzZW5lci1neW0uZGVcL2lzZXJ2XC8iLCJleHAiOjE3MTU4ODA4MTEsIm5iZiI6MTcwODEwNDc1MSwiaWF0IjoxNzA4MTA0ODExLCJzaWQiOiIifQ.vPpQiCh23_rZFiMLrkdIHlTsnLlf8uw7C_VE0jlFsNhK103d4ivV6pcqCLdYbDkK-0k0DtfYEDrkGn9UjlimcQ" target="_blank">IServ</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://flopperchatapp69.000webhostapp.com/login.php" target="_blank">ChatApp(online)</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
  