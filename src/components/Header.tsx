import { Link } from "react-router-dom";
import { navigation } from "../consts";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
    return (
        <Navbar
            expand="lg"
            // className="p-3 mb-2 bg-white bg-gradient text-white"
            bg="secondary"
            // data-bs-theme="dark"
        >
            <Container fluid>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        {navigation.map(({ id, text, path }) => (
                            <Nav.Link
                                className="text-white"
                                as={Link}
                                key={id}
                                to={path}
                            >
                                {text}
                            </Nav.Link>
                        ))}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
