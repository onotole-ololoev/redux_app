const BASE_URL = 'https://fast-refuge-10042.herokuapp.com/';
// const data = {
//     email: "test@mail.ru",
//     password: 'test'
// }
export const login = (data) => {
    fetch(`${BASE_URL}api/auth/login`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json'
    },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data
        })
        .catch(error => console.log(error));
};
