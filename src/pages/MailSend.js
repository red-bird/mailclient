import React from 'react';
import {Container} from "react-bootstrap";
import MailForm from "../components/MailForm";

const MailSend = () => {
    return (
        <div>
            <Container className={'d-flex justify-content-center align-items-center'}
                       style={{height: window.innerHeight - 54}}
            >
                <MailForm />
            </Container>
        </div>
    );
};

export default MailSend;