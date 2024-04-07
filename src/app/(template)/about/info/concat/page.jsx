'use client'

import { Button, Divider, Tag } from 'antd';
import { useStore } from '@/store';
import { store, otherStore } from '../store';

const A = () => {
    const [state, setState] = useStore(store);
    return (
        <div>
            <h1>A</h1>
            <h2>{state.count}</h2>
            <ul>
                <li>
                    {state.detail.list?.map((item, index) => (
                        <Tag key={index} color='processing'>{item.name}</Tag>
                    ))}
                </li>
            </ul>
            <Button
                type='primary'
                onClick={() => setState(draft => { draft.detail.list.push({ name: `${+new Date()}` }) })}
            >add list</Button>
        </div>
    );
};
const B = () => {
    const [state, setState] = useStore(store);
    return (
        <div>
            <h1>B</h1>
            <ul>
                <li>
                    {state.detail.list?.map((item, index) => (
                        <Tag key={index} color='processing'>{item.name}</Tag>
                    ))}
                </li>
            </ul>
            <Button
                type='primary'
                onClick={() => setState(draft => { draft.detail.list[1].name = +new Date() })}
            >change 2th</Button>
        </div>
    );
};
const C = () => {
    const [state, setState] = useStore(store);
    return (
        <div>
            <h1>C</h1>
            <h2>{state.count}</h2>
            <ul>
                <li>
                    {state.detail.list?.map((item, index) => (
                        <Tag key={index} color='processing'>{item.name}</Tag>
                    ))}
                </li>
            </ul>
            <Button
                type='primary'
                onClick={() => setState(draft => { draft.count++ })}
            >plus count</Button>
        </div>
    );
};

const D = () => {
    const [state, setState] = useStore(otherStore);
    return (
        <div>
            <h1>D</h1>
            <h2>
                ￥{state.value}
            </h2>
            <Button
                type='primary'
                onClick={() => setState(draft => { draft.value++ })}
            >add other store count</Button>
        </div>
    );
};

const Card = ({ children }) => {
    return (
        <div style={{ padding: 24, border: '1px solid #1677ff', marginBottom: 24 }}>
            {children}
        </div>
    );
};

export default () => {
    return (
        <div>
            <h1>Concat Page</h1>
            <Card>
                <A />
                <Divider />
                <B />
                <Divider />
                <C />
            </Card>
            <Card>
                <D />
            </Card>
        </div>
    );
};