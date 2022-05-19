import React from 'react';
import LoginForm from "../components/LoginForm";
import {Container} from "react-bootstrap";

const Auth = () => {
    return (
        <div>
            <Container className={'d-flex justify-content-center align-items-center'}
                       style={{height: window.innerHeight - 54}}
            >
                <LoginForm />
            </Container>
        </div>
    );
};

export default Auth;