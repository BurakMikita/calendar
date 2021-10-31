import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from 'react-router-dom';
import {RouteNames} from "../router";
import {useTypedSelector} from "../hook/UseTypeSelector";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";
import {useActions} from "../hook/useActions";


const Navbar: FC = () => {
    const router = useHistory()
    const {isAuth, user} = useTypedSelector(state => state.auth);
    const {logout} = useActions()




    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{color:'white', paddingRight:'10px'}}>{user.username}</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                onClick={logout}
                                key={1}
                            >
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <>
                        <div style={{color:'white', paddingRight:'10px'}}>Войти</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                onClick={() => router.push(RouteNames.LOGIN)}
                                key={1}
                            >
                                Логин
                            </Menu.Item>
                        </Menu>
                    </>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;