import * as actionTypes from "./actionTypes";
import axios from "axios";

export const usermove_nlp = (page, titleid, categoryid) => {
    return {
        type: actionTypes.USER_MOVE_NLP,
        page: page,
        titleid: titleid,
        categoryid: categoryid
    };
};

export const api_request = (url, text) => {
    console.log(`http://127.0.0.1:8000/{url}`)
    url = url.replace(/\s/g, "");
    url = "http://127.0.0.1:8000/api/" + url + "/" + `?text=${text}`;
    console.log(url, text)
    debugger
    return dispatch => {
        debugger
        // axios.defaults.headers = {
        //     "Content-Type": "application/json",
        //     Authorization: `Token ${token}`
        // };
        axios
            .get(url)
            .then(res => {
                debugger
            })
            .catch(err => {
                debugger
            });
    };
};