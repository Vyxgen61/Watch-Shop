import React, { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import './style.css'
import { useNavigate } from "react-router-dom";

function FormLogin() {
    let navigate = useNavigate();
    const [error,setError] = useState('')
    const onFinish = (values) => {
        if(values.username === 'admin' && values.password === 'admin'){
            navigate('/product')   
            localStorage.setItem('token', 'admin')
        }
        else {
            setError('Tên đăng nhập hoặc mật khẩu không đúng.Vui lòng thử lại !')
        }
    };

    return (
        <>
            <div className="login_form">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input size='large' style={{width:'500px'}} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password size='large' style={{width:'500px'}} />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit" style={{width:'300px'}}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

                    <span className='error_login'>{error}</span>

            </div>
        </>
    )
}
export default FormLogin