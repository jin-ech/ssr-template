'use client'

import { Button, Tag } from "antd";

import { useStore } from "@/store";
import { store } from '../store';

import Nav from './_components/nav';

// console.log('store: ', store);

export default () => {
    const [state, setState] = useStore(store);
    // suppressHydrationWarning
    return (
        <div>
            <h1>BaseInfo Page</h1>
            <Nav />
            <h2>{state.count}</h2>
            <ul>
                <li>
                    {state.detail.list?.map((item, index) => (
                        <Tag key={index} color='processing'>{item.name}</Tag>
                    ))}
                </li>
            </ul>
            <Button type='primary' onClick={() => setState(draft => { draft.count++ })}>plus count</Button>
        </div>
    );
};