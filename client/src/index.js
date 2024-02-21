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
                components: {},
                token: {
                    borderRadius: '2px',
                    colorPrimary: '#40513B',
                    colorPrimaryHover: '#40713B',
                },
            }}>
            <App />
        </ConfigProvider>
    </React.StrictMode>
);
