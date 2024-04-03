import { Tag } from "antd";

const getData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(+new Date());
        }, 1000 * 4 * Math.random());
    });
};

export default async () => {
    const data = await getData();

    return (
        <Tag color='processing'>
            {data}
        </Tag>
    );
};