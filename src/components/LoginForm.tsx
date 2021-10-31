import React, {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useTypedSelector} from "../hook/UseTypeSelector";



const LoginForm:FC = () => {
  const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {error, isLoading} = useTypedSelector(state => state.auth);

    const submit = () => {
        dispatch(AuthActionCreators.login(username,password))
    }
    return (
        <div>
        <Form
            onFinish={submit}
        >
            {error && <div style={{color: 'red'}}>
                {error}
            </div>}
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[rules.required("Пожалуйста введите имя пользователя!")]}
            >
                <Input
                    value={password}
                    onChange={e => setUsername(e.target.value)}
                    type={"username"}
                />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[rules.required("Пожалуйста введите пароль")]}
            >
                <Input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={"password"}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit"  loading={isLoading}>
                    Войти
                </Button>
            </Form.Item>
        </Form>
        </div>
    );
};

export default LoginForm;