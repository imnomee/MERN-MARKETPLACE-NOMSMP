import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Divider } from '../../components/Divider';

export function Register() {
    const onFinish = (values) => {
        console.log('success', values);
    };
    return (
        <div className="h-screen bg-primary flex justify-center items-center">
            <div className="bg-white p-5 rounded-xl w-[450px]">
                <h1 className="text-primary text-2xl">
                    NOMS MP - <span className="text-gray-400">REGISTER</span>
                </h1>
                <Divider />
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Name" name="name">
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item label="Password" name="password">
                        <Input type="password" placeholder="Password" />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Register
                    </Button>
                    <div className="mt-5 text-center">
                        <span className="text-gray-400">
                            Already have an account?
                            <Link to="/login"> Login</Link>
                        </span>
                    </div>
                </Form>
            </div>
        </div>
    );
}
