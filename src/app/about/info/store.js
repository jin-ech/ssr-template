
import { createStore } from '@/store';

const store = createStore({
    count: 0,
    name: 'jinech',
    detail: {
        name: 'detail name',
        list: new Array(10).fill('').map((_, index) => ({ name: `name${index}` }))
    }
});

const otherStore = createStore({ value: 0 });

export {
    store,
    otherStore,
};