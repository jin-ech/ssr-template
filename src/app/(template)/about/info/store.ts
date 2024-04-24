
import { createStore } from 'jcstore';

const initState = {
    count: 0,
    name: 'jinech',
    detail: {
        name: 'detail name',
        list: new Array(10).fill('').map((_, index) => ({ name: `name${index}` }))
    }
};

const store = createStore(initState);

const otherStore = createStore({ value: 0 });

export type IniState = typeof initState;

export {
    store,
    otherStore,
};