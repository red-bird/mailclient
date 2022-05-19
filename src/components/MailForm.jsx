import React, {useContext, useState} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {INBOX_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {sendMail} from "../http/mailApi";

const MailForm = () => {
    const {user} = useContext(Context)
    const [to, setTo] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const click = async () => {
        try {
            const response = await sendMail({
                from: user.user.username,
                to: to,
                subject: subject,
                message: message
            })
            console.log(response)
            if (!!response) {
                navigate(INBOX_ROUTE)
            } else {
                alert('Введены некоректные данные')
            }
        } catch (e) {
            alert('Введены некоректные данные')
            console.log(e.response.data.message())
        }
    }

    return (
        <div>
            <Card style={{width: 600}} className={'p-5'}>
                <h2 className={"m-auto"}>Новое письмо</h2>
                <Form className={'d-flex flex-column'}>
                    <Form.Control
                        className={'mt-3'}
                        placeholder={"Кому"}
                        value={to}
                        onChange={e => setTo(e.target.value)}
                    />
                    <Form.Control
                        className={'mt-3'}
                        placeholder={"Тема"}
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                    />
                    <Form.Control
                        className={'mt-3'}
                        placeholder={"Сообщение"}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <div className={'d-flex justify-content-between mt-3'}>
                        <Button
                            variant={"outline-success"}
                            onClick={click}
                        >
                            Отправить
                        </Button>
                    </div>
                </Form>
            </Card>
        </div>
    );
};

export default MailForm;