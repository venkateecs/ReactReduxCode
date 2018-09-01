export const SAVE_LOGINDATA = 'saveLoginData';
export const SAVE_HANDLEDATA = 'saveHandleData';
const jwtDecode = require("jwt-decode");
const Cryptr = require('cryptr');

export function saveloginDetails(newValue) {
    return {
        type: SAVE_LOGINDATA,
        payload: {
            loginData: newValue
        }
    }
}
export function saveLoginResponseData(newValue) {
    return {
        type: SAVE_HANDLEDATA,
        payload: {
            loginResponseData: newValue
        }
    }
}
export function handleLogin(email, password, pushToken, osType) {
    const cryptr = new Cryptr('Fissionlabs');
    const encryptPwd = cryptr.encrypt(password);
    const obj = {
        "email": email,
        "password": encryptPwd,
        "push_token": pushToken,
        "OS_type": "desktop"
    };
    return dispatch => {
        return fetch('http://34.207.87.118:9090/api/v1/auth/login', {
            'method': 'POST',
            'headers': {
                "Accept": "application/json",
                "content-Type": "application/json",
            },
            'body': JSON.stringify(obj),
        }).then((response) => {
            return response.json();
        })
    }

}