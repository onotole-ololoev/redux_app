import { createStore } from "redux";

export default () => {
    const store = createStore((state = { user: 'Onotole', age: 35}) => {
        return state;
    });

    return store;

}

