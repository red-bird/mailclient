import React, {useContext, useEffect, useReducer, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Col, Container, ListGroup, Row} from "react-bootstrap";
import {
    deleteInputMail,
    deleteOutputMail,
    getInputMail,
    getOutputMail,
    importantInputMail,
    importantOutputMail
} from "../http/mailApi";
import {useLocation, useNavigate} from "react-router-dom";
import {INBOX_ROUTE, LOGIN_ROUTE} from "../utils/consts";


const Inbox = () => {
    const {inbox} = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        getInputMail().then(data => inbox.setInput(data))
        getOutputMail().then(data => inbox.setOutput(data))
    }, [])

    const renderMail = (mail) => {
        return (
            <ListGroup.Item
                onMouseEnter={(e) => e.target.style.borderColor = 'cyan'}
                onMouseLeave={(e) => e.target.style.borderColor = 'lightgray'}
                onClick={() => navigate(INBOX_ROUTE + '/' + mail.id)}
                key={mail.id}>
                <Row>
                    <Col md={2}>
                        {inbox.isInput ?
                            `${mail.fromName}`
                            :
                            `${mail.toName}`}
                    </Col>
                    <Col md={3}>
                        {`${mail.subject}`}
                    </Col>
                    <Col md={3}>
                        {`${new Date(mail.date).toLocaleString()}`}
                    </Col>
                    <Col md={2}>
                        <Button
                            variant={inbox.isInput ?
                                mail.toImportant ? "warning" : "outline-warning"
                                :
                                mail.fromImportant ? "warning" : "outline-warning"}
                            onClick={(e) => {
                                inbox.isInput ? importantInputMail(mail.id) : importantOutputMail(mail.id)
                                e.stopPropagation()
                                window.location.reload()
                            }}
                        >
                            ★
                        </Button>
                    </Col>
                    <Col md={2}>
                        <Button
                            variant={"danger"}
                            onClick={(e) => {
                                const res = inbox.isInput ? deleteInputMail(mail.id) : deleteOutputMail(mail.id)
                                e.stopPropagation()
                                window.location.reload()
                            }}
                        >
                            Удалить
                        </Button>
                    </Col>
                </Row>
            </ListGroup.Item>
        )
    }

    return (
        <div>
            <h1>{inbox?.isInput ? 'Входящие' : 'Отправленные'}</h1>
            <Container className={'mt-3'}>
                <Button
                    className={'mx-3'}
                    variant={"outline-success"}
                    onClick={() => inbox.isInput = !inbox?.isInput}
                >
                    {inbox?.isInput ? 'В отправленные' : 'Во входящие'}
                </Button>
                <Button
                    variant={"outline-info"}
                    onClick={() => navigate(INBOX_ROUTE + '/new')}
                >
                    Написать
                </Button>
                <Row className={'mt-3'}>
                    <Col md={2}>
                        {inbox.isInput ?
                            'От:'
                            :
                            'Кому:'}
                    </Col>
                    <Col md={3}>
                        {'Тема:'}
                    </Col>
                    <Col md={3}>
                        Время:
                    </Col>
                </Row>
                <ListGroup className={'mt-3'}>
                    {
                        inbox?.isInput ?
                            inbox.input.map((mail) => renderMail(mail))
                            :
                            inbox.output.map((mail) => renderMail(mail))
                    }
                </ListGroup>
            </Container>
        </div>
    );
};

export default observer(Inbox);