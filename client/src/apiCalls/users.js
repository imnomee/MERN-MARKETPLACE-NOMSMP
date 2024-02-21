import { axiosInstance } from './axiosInstance';

//register user
export const RegisterUser = async (values) => {
    try {
        const response = await axiosInstance.post(
            '/api/users/register',
            values
        );
        return response.data;
    } catch (err) {
        return err.message;
    }
};

//login user
export const LoginUser = async (values) => {
    try {
        const response = await axiosInstance.post('/api/users/login', values);
        return response.data;
    } catch (err) {
        return err.message;
    }
};
