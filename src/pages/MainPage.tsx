// import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";
import { categories } from "../consts";
import { Link, useLocation } from "react-router-dom";
import { Order } from "../components";
import { Row, Col, Nav, Card, Button } from "react-bootstrap";

function MainPage() {
    // const [count, setCount] = useState<number>(0);
    // const [title, setTitle] = useState<string>("");
    const { pathname } = useLocation();

    // console.log(pathname);
    return (
        <Row>
            <Col xs={8}>
                {pathname === "/order" ? (
                    <Nav>
                        {categories.map(({ id, text, path, img }) => (
                            <Nav.Item key={id}>
                                <Nav.Link as={Link} to={path}>
                                    <Card
                                        bg="secondary"
                                        style={{ width: "15rem" }}
                                    >
                                        <Card.Img
                                            style={{ height: "12rem" }}
                                            variant="top"
                                            src={img}
                                        />
                                        <Card.Body>
                                            <Card.Title className="text-white">
                                                {text}
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Nav.Link>
                            </Nav.Item>
                        ))}
                    </Nav>
                ) : (
                    <Button as={Link} to={"/order"}>
                        back
                    </Button>
                )}
                <Outlet />
            </Col>
            <Col>
                <Order />
            </Col>
        </Row>
    );
}

export default MainPage;
