import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ConfigProvider
            theme={{
                components: {
                    // Button: {
                    //     colorPrimary: '#40513B',
                    // },
                },
                token: {
                    colorPrimary: '#40513B',
                    borderRadius: '2px',
                },
            }}>
            <App />
        </ConfigProvider>
    </React.StrictMode>
);
