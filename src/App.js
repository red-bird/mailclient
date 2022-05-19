import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {useContext, useEffect} from "react";
import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Spinner} from "react-bootstrap";

function App() {

    const {user} = useContext(Context)

    useEffect(() => {
        if (localStorage.getItem('user')) {
            user.checkAuth()
        }
    }, [])

    if (user.isLoading) {
        return <Spinner animation={'grow'} />
    }

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default observer(App);
