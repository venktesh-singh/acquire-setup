import axios from 'axios';
import * as CONSTANT from '../../config';
export const GET_HANDOVER_LIST = 'GET_HANDOVER_LIST';
export const ADD_HANDOVER = 'ADD_HANDOVER';
export const DELETE_HANDOVER = 'DELETE_HANDOVER';
export const UPDATE_HANDOVER = 'UPDATE_HANDOVER';
export const GET_HANDOVER_LIST_BY_EMP = 'GET_HANDOVER_LIST_BY_EMP';


export const getHandoverList = () => (dispatch) => {
    axios.get(CONSTANT.BASE_URL + '/get_handover').then((res) => {
        dispatch({
            type: GET_HANDOVER_LIST,
            payload: res.data,
        });
    });
};


export const addHandover = (handover) => {
    return function (dispatch) {
        axios.post(CONSTANT.BASE_URL + `/add_handover`, handover)
            .then((res) => {
                dispatch({
                    type: ADD_HANDOVER,
                    payload: res.data,
                });
            })
            .catch((error) => console.log(error));
    }
}

export const deleteHandover = async (_id) => {
    await axios.delete(CONSTANT.BASE_URL + `/delete_handover/${_id}`)
};

export const updateHandover = (_id, handoverData) => (dispatch) => {
    axios.patch(CONSTANT.BASE_URL + `/update_handover/${_id}`, handoverData).then((res) => {
        dispatch({
            type: UPDATE_HANDOVER,
            payload: res.data,
        });
    });
};

export const getHandoverListByEmp = (name) => (dispatch) => {
    console.log("name", name);
    axios.get(CONSTANT.BASE_URL + `/get_handover_by_emp_id/${name}`).then((res) => {
        dispatch({
            type: GET_HANDOVER_LIST_BY_EMP,
            payload: res.data,
        });
    });
};
