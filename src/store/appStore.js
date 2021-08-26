import { createStore } from "redux";

export default () => {
    const store = createStore((state = {
        user: {
            id:'',
            email: '',
            password: '',
            name: '',
            surname: '',
            avatar: ''
        },
        post: {
            id: '',
            title: '',
            text: '',
            date: '',
            author: ''
        }
    }) => {
        return state;
    });

    return store;

}

