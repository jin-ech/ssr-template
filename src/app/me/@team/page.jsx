
import { Space } from "antd";

const arr = new Array(10).fill('').map((_, index) => index);

const Team = () => {

    return (
        <Space>
            {arr.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </Space>
    );
};

export default Team;