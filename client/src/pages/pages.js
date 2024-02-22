import React from 'react';
import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { Divider } from '../components/components';

//FORM VALIDATION RULES
const rules = [
    {
        required: true,
        message: 'required',
    },
];
//ON FINISH FUNCTION FROM antd FOR VALUES AFTER SUBMIT
const onFinish = (values) => {
    console.log('success', values);
};

//HOME
export function Home() {
    return <div>Home</div>;
}

//LOGIN
export function Login() {
    return (
        <div className="h-screen bg-primary flex justify-center items-center ">
            <div className="bg-white p-5 rounded-xl w-[450px]">
                <h1 className="text-primary text-2xl">
                    NOMS MP - <span className="text-gray-400">LOGIN</span>
                </h1>
                <Divider />
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Email" name="email" rules={rules}>
                        <Input placeholder="Email..." />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={rules}>
                        <Input placeholder="Password..." />
                    </Form.Item>
                    <Button
                        className="mt-3"
                        type="primary"
                        htmlType="submit"
                        block>
                        LOGIN
                    </Button>

                    <div className="text-center mt-5">
                        <span className="text-gray-500">
                            Don't have an account?
                        </span>
                        <Link to="/register" className="text-secondary">
                            Register
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}

//REGISTER
export function Register() {
    return (
        <div className="h-screen bg-primary flex justify-center items-center ">
            <div className="bg-white p-5 rounded-xl w-[450px]">
                <h1 className="text-primary text-2xl">
                    NOMS MP - <span className="text-gray-400">REGISTER</span>
                </h1>
                <Divider />
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label="Name" name="name" rules={rules}>
                        <Input placeholder="Name..." />
                    </Form.Item>
                    <Form.Item label="Email" name="email" rules={rules}>
                        <Input placeholder="Email..." />
                    </Form.Item>
                    <Form.Item label="Password" name="password" rules={rules}>
                        <Input placeholder="Password..." />
                    </Form.Item>
                    <Button
                        className="mt-3"
                        type="primary"
                        htmlType="submit"
                        block>
                        REGISTER
                    </Button>

                    <div className="text-center mt-5">
                        <span className="text-gray-500">
                            Already have an account?
                        </span>
                        <Link to="/login" className="text-secondary">
                            Login
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    );
}
