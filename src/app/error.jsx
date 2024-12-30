'use client'

import { Result } from "antd";

export default () => {

    return (
        <Result
            status='500'
            title='500 Error'
            subTitle="发生异常，请联系管理员"
        />
    );
};