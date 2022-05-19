import React, {useState} from 'react';
import {Container, ListGroup} from "react-bootstrap";
import {useContext, useEffect} from "react";
import {Context} from "../index";
import {getInputMail, getMail, getOutputMail} from "../http/mailApi";
import {useParams} from "react-router-dom";

const Mail = () => {
    const [mail, setMail] = useState({subject: "Такого письма не существует"})
    const {inbox} = useContext(Context)
    const {id} = useParams()

    useEffect(() => {
        getMail(id).then(data => setMail(data))
    }, [])

    return (
        <div>
            <Container className={'mt-3'}>
                <h1>Тема: {mail.subject}</h1>
                <h2>От: {mail.fromName}</h2>
                <h2>От: {mail.toName}</h2>
                <h3>Время: {new Date(mail.date).toLocaleString()}</h3>
                <p>{mail.message}</p>
            </Container>
        </div>
    );
};

export default Mail;