// import {store} from '@redux/store';
import axios from 'axios';
import { store } from '../redux/store';
import { BASE_URL } from './helpers';

const HTTP_CLIENT = axios.create({
    baseURL: BASE_URL,
});

HTTP_CLIENT.interceptors.request.use(
    config => {
        const accessToken = store.getState().root.user.authToken;
        if (!!accessToken) {
            config.headers.common = {
                Authorization: `Bearer ${accessToken}`
            }
        }
        return config;
    },
    error => {
        Promise.reject(error.response || error.message);
    }
);

//" for handling response "//

// HTTP_CLIENT.interceptors.response.use(
//   response => {
//       return response;
//   },
//   error => {
//       let originalRequest = error.config;
//       let refreshToken = localStorage.getItem('refreshToken');
//       const username = EmailDecoder(); // decode email from jwt token subject
//       if (
//           refreshToken &&
//           error.response.status === 403 &&
//           !originalRequest._retry &&
//           username
//       ) {
//           originalRequest._retry = true;
//           return axios
//               .post(`${API_URL}/authentication/refresh`, {
//                   refreshToken: refreshToken,
//                   username,
//               })
//               .then(res => {
//                   if (res.status === 200) {
//                       localStorage.setItem(
//                           'accessToken',
//                           res.data.accessToken
//                       );
//                       localStorage.setItem(
//                           'refreshToken',
//                           res.data.refreshToken
//                       );

//                       originalRequest.headers[
//                           'Authorization'
//                       ] = `Bearer ${res.data.accessToken}`;

//                       return axios(originalRequest);
//                   }
//               })
//               .catch(() => {
//                   localStorage.clear();
//                   location.reload();
//               });
//       }
//       return Promise.reject(error.response || error.message);
//   }
// );


export { HTTP_CLIENT };
