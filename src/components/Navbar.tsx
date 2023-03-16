import React, {Dispatch, FC} from 'react';
import {Header} from "antd/es/layout/layout";
import {Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";


const Navbar: FC = () => {
    const navigate = useNavigate();
    const {isAuth,user} = useTypedSelector(state => state.auth)
    const dispatch: Dispatch<any> = useDispatch();
    return (
        <Header>
            <Row  justify={"end"}>
                {isAuth
                ?
                    <Menu theme={'dark'} mode={'horizontal'} selectable={false}>
                        <div style={{color: "white"}}>{user.username}</div>
                        <Menu.Item onClick={() => {
                            dispatch(AuthActionCreators.logout());
                        }} key={2}>Выйти</Menu.Item>
                    </Menu>
                :
                    <Menu theme={'dark'} mode={'vertical'} selectable={false}>
                        <Menu.Item onClick={() => {
                            navigate(RouteNames.LOGIN)
                        }} key={1}>Логин</Menu.Item>
                    </Menu>
                }

            </Row>
        </Header>
    );
};

export default Navbar;