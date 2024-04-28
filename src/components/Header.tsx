import { Link } from "react-router-dom";
import { navigation } from "../consts";
import { useDispatch } from "react-redux";
import { changeTheme } from "../store/demoSclice";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
    const dispatch = useDispatch();

    return (
        <Navbar expand="lg" bg="secondary">
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
                    <Button onClick={() => dispatch(changeTheme())}>
                        theme
                    </Button>
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
