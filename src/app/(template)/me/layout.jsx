import { Col, Row } from "antd";

export default ({children, analytics, team}) => {

    return (
        <div>
            {children}
            <Row>
                <Col flex={1}>{team}</Col>
                <Col flex={1}>{analytics}</Col>
            </Row>
        </div>
    )
};