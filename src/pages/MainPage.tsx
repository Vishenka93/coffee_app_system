// import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";
import { categories } from "../consts";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Order } from "../components";
import { Row, Col, Nav, Card, Button } from "react-bootstrap";

function MainPage() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

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
                    <Button onClick={() => navigate("/order")}>back</Button>
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
