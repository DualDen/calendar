import React, {FC} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    return (
        isAuth
        ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={<route.component/>}/>
                )}
                <Route path={"*"} element={<Navigate to={RouteNames.EVENT}/>}/>
            </Routes>
        :
            <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={<route.component/>}/>
                )}
                <Route path={"*"} element={<Navigate to={RouteNames.LOGIN}/>}/>
            </Routes>


    );
};

export default AppRouter;