import {login} from "../../API/v1";

export default (data) => async (dispatch) => {
    const result = await login(data);

    console.log(result);

    await dispatch({type: 'AUTH/LOGIN', payload: result})
};