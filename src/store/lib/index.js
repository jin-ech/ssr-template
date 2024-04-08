import {
    useSyncExternalStore
} from 'react'
import {
    produce
} from 'immer';
import { getUuid, isEqual } from './utils';

export const createStore = (initState = {}) => {
    const __storeKey = getUuid();
    // 订阅列表
    const listeners = new Set();
    // 创建代理对象
    const createProxyData = data => {
        return data;
    };
    // 创建初始状态
    let state = createProxyData(initState);
    // 获取客户端初始状态
    const getInitState = () => state;
    // 获取服务端初始状态
    const getServerSnapshot = () => getInitState();
    // 获取状态快照
    const getSnapshot = () => state;
    // 订阅更新事件
    const subscribe = event => {
        listeners.add(event);
        return () => listeners.delete(event);
    };
    // 销毁
    const destory = () => listeners.clear();
    // 派发更新数据
    const dispatch = newState => {
        state = newState;
        listeners.forEach(l => l());
    };

    const apis = {
        __storeKey,
        dispatch,
        listeners,
        subscribe,
        getInitState,
        getSnapshot,
        destory,
        getServerSnapshot
    };
    return apis;
};

export const useStore = store => {
    const state = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
    // 更新状态，触发订阅列表批量派发事件
    const setState = arg => {
        let newState = arg;
        if (typeof arg === 'function') {
            const callback = arg;
            const currentState = store.getSnapshot();
            newState = produce(currentState, callback);
            store.dispatch(newState);
            return;
        }
        if (!isEqual(state, newState)) {
            store.dispatch(newState);
        }
    };

    return [
        state,
        setState
    ];
};