import { Result } from "antd";
import Link from "next/link";

export default () => {

    return (
        <Result
            status='404'
            title='404 NotFound'
            subTitle="当前页面不存在"
            extra={<Link href='/'>返回首页</Link>}
        />
    );
};