'use client';
import React from 'react';
import { App, ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import zhCN from 'antd/locale/zh_CN';

import moment from "moment";

import '/public/antd.min.css';

moment.locale('zh-cn');

const AntdStyleRegistry: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <AntdRegistry>
            <ConfigProvider locale={zhCN}>
                <App>{children}</App>
            </ConfigProvider>
        </AntdRegistry>
    );
};

export default AntdStyleRegistry;
