import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Divider } from '../../components/Divider';

const rules = [
    {
        required: true,
        message: 'required',
    },
];

export function Login() {
    const onFinish = (values) => {
        console.log('success', values);
    };
    return (
        <div className="h-screen bg-primary flex justify-center items-center">
            <div className="bg-white p-5 rounded-xl w-[450px]">
                <h1 className="text-primary text-2xl">
                    NOMS MP - <span className="text-gray-400">LOGIN</span>
                </h1>
                <Divider />
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Email" name="email" rules={rules}>
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={rules}>
                        <Input type="password" placeholder="Password" />
                    </Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        block
                        className="mt-4">
                        Register
                    </Button>
                    <div className="mt-5 text-center">
                        <span className="text-gray-400">
                            Don't have an account?
                            <Link to="/register"> Register</Link>
                        </span>
                    </div>
                </Form>
            </div>
        </div>
    );
}
