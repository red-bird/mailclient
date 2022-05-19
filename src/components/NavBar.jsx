import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {observe} from "mobx";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, INBOX_ROUTE, LOGIN_ROUTE} from "../utils/consts";

const NavBar = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand onClick={() => navigate(INBOX_ROUTE)}>Почта</Navbar.Brand>
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        {user.isAuth ?
                            <div>
                                <Button onClick={() => navigate(ADMIN_ROUTE)} variant={'outline-light'}>Админ панель</Button>
                                <Button onClick={() => {
                                    user.logout()
                                    navigate(LOGIN_ROUTE)
                                }
                                } variant={'outline-light'} className="mx-2" >Выйти</Button>
                            </div>
                            :
                            <Button onClick={() => navigate(LOGIN_ROUTE)} variant={'outline-light'}>Авторизация</Button>
                        }

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default observer(NavBar);