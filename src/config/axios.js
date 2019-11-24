import Axios from 'axios';

const CancelToken = Axios.CancelToken;
const axiosSource = CancelToken.source;

const axios = Axios.create({
    cancelToken: axiosSource.token,
    params: {} // do not remove this, its added to add params later in the config
});

axios.interceptors.response.use(res => res, error => {
    const {response} = error;
    if (!response) { //network error
        alert('뭔가 잘못됐어요!');
        // return error;
    } else {
        const {status} = response;

        if (status === 413) {
            alert('파일 사이즈 초과');
        }

        if (Math.floor(status / 100) === 5) {
            alert('서버에서 에러가 발생했습니다');
        }
        return error;
    }
});

export {axios, axiosSource};