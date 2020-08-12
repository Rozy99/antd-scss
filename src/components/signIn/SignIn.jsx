import React from "react";
import "./style.scss";
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

function SignInC() {
    
    const onFinish = values => {
        console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='sign-in d_flex a_items_center j_content_center'>
            <div className='sign-in-block'>
                <div className='logo'>
                    <img src={require('./../../assets/img/logo.png')} alt="logo" />
                </div>
                <div className='block-title'>
                    <h3>Sign in</h3>
                </div>
                <div className='form'>
                    <Form {...layout} name="basic" initialValues={{remember: true,}} onFinish={onFinish} onFinishFailed={onFinishFailed}>
                        <Form.Item name="username" rules={[ { required: true,
                            message: 'Please input your username!' , }, ]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="password" rules={[ { required: true,
                            message: 'Please input your password!' , }, ]}>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default SignInC;