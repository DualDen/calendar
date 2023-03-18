import React, {Dispatch, FC} from 'react';
import {Header} from "antd/es/layout/layout";
import {Menu, Row} from "antd";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../routes";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";
import MenuItem from "antd/es/menu/MenuItem";


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
                        <MenuItem key={1} onClick={() => {
                            dispatch(AuthActionCreators.logout());
                        }}>Выйти</MenuItem>
                    </Menu>
                :
                    <Menu theme={'dark'} mode={'vertical'} selectable={false}>
                        <MenuItem key={2} onClick={() => {
                            navigate(RouteNames.LOGIN)
                        }}>Логин</MenuItem>
                    </Menu>
                }

            </Row>
        </Header>
    );
};

export default Navbar;