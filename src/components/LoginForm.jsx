import React, {useContext, useState} from 'react';
import {FC} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Button, Card, Form, Row} from "react-bootstrap";
import {NavLink, useNavigate, useLocation} from "react-router-dom";
import {INBOX_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const LoginForm: FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {user} = useContext(Context);
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    const click = async () => {
        try {
            let response = null
            if (isLogin) {
                response = await user.login(username, password)
            } else {
                response = await user.registration(username, password)
            }
            // console.log(response)
            if (!!response) {
                navigate(INBOX_ROUTE)
            } else {
                alert("Логин и пароль не верны")
            }
        } catch (e) {
            alert(e.response.data.message())
        }
    }

    return (
        <div>
            <Card style={{width: 600}} className={'p-5'}>
                <h2 className={"m-auto"}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className={'d-flex flex-column'}>
                    <Form.Control
                        className={'mt-3'}
                        placeholder={"Имя пользователя"}
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <Form.Control
                        className={'mt-3'}
                        placeholder={"Пароль"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type={'password'}
                    />
                    <div className={'d-flex justify-content-between mt-3'}>
                        {isLogin ?
                            <div>
                                <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                            </div>
                        :
                            <div>
                                <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default observer(LoginForm);