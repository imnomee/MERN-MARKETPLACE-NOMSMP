import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GetCurrentUser } from '../pages/pages';
import { message, Button } from 'antd';

//Divider
export function Divider() {
    return <div className="w-full h-[1px] bg-gray-300 my-4"></div>;
}

//Protect Pages
export function ProtectedPage({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);

    const validateToken = async () => {
        try {
            const response = await GetCurrentUser();

            if (!response.success) {
                throw new Error(response.message);
            }

            //setting user
            setUser(response.data);
        } catch (error) {
            navigate('/login');
            message.error(error.message);
        }
    };
    React.useEffect(() => {
        if (localStorage.getItem('token')) {
            validateToken();
        } else {
            message.error('Please Login to continue');
            navigate('/login');
        }
    }, []);
    return (
        <div>
            {user && (
                <div>
                    {user.name}
                    {children}
                    <Button
                        onClick={() => {
                            localStorage.clear('token');
                            navigate('/login');
                        }}
                        type="secondary">
                        Sign Out
                    </Button>
                </div>
            )}
        </div>
    );
}
