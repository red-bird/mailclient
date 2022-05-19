import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {INBOX_ROUTE} from "../utils/consts";
import {useContext} from "react";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    const isAuth = user?.isAuth
    console.log(user)
    return (
        <div>
            <Routes>
                {isAuth && authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component />} />
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component />} />
                )}
                {/*<Route*/}
                {/*    path="*"*/}
                {/*    element={<Navigate to={INBOX_ROUTE} replace />}*/}
                {/*/>*/}
            </Routes>
        </div>
    );
};

export default AppRouter;