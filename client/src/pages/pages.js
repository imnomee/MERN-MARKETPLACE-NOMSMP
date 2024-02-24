import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { Divider } from '../components/components';
import { axiosInstance } from '../axiosInstance';

//FORM VALIDATION RULES
const rules = [
    {
        required: true,
        message: 'required',
    },
];

//HOME
export function Home() {
    return <div>Home</div>;
}

//LOGIN
const LoginUser = async (payload) => {
    try {
        const response = await axiosInstance.post('/api/users/login', payload);
        return response.data;
    } catch (err) {
        return err.message;
    }
};
export function Login() {
    //ON FINISH FUNCTION FROM antd FOR VALUES AFTER SUBMIT
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        try {
            const response = await LoginUser(values);
            if (response.success) {
                message.success(response.message);
                localStorage.setItem('token', response.token);
                form.resetFields();
            } else {
                throw new Error(response.message);
            }
        } catch (err) {
            message.error(err.message);
        }
    };
    return (
        <div className="h-screen bg-primary flex justify-center items-center ">
            <div className="bg-white p-5 rounded-xl w-[450px]">
                <h1 className="text-primary text-2xl">
                    NOMS MP - <span className="text-gray-400">LOGIN</span>
                </h1>
                <Divider />
                <Form form={form} layout="vertical" onFinish={onFinish}>
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
                            Don't have an account?&nbsp;
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
const RegisterUser = async (payload) => {
    try {
        const { data } = await axiosInstance.post(
            '/api/users/register',
            payload
        );
        return data;
    } catch (err) {
        return err.message;
    }
};

export function Register() {
    //ON FINISH FUNCTION FROM antd FOR VALUES AFTER SUBMIT
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        try {
            const response = await RegisterUser(values);
            if (response.success) {
                message.success(response.message);
                form.resetFields();
            } else {
                throw new Error(response.message);
            }
        } catch (err) {
            message.error(err.message);
        }
    };
    return (
        <div className="h-screen bg-primary flex justify-center items-center ">
            <div className="bg-white p-5 rounded-xl w-[450px]">
                <h1 className="text-primary text-2xl">
                    NOMS MP - <span className="text-gray-400">REGISTER</span>
                </h1>
                <Divider />
                <Form form={form} layout="vertical" onFinish={onFinish}>
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
                            Already have an account?&nbsp;
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

//Get Current user
export const GetCurrentUser = async () => {
    try {
        const response = await axiosInstance.get('/api/users/get-current-user');
        return response.data;
    } catch (err) {
        return err.message;
    }
};
