import 'fetch-everywhere';
import es6Promise from 'es6-promise';

es6Promise.polyfill();

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const parseJSON = response => response.json();

const fetchUrl = url => global.fetch(url);

const fetch = (url, resolve, reject) => {
  fetchUrl(url)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      // console.log('request succeeded with JSON response', data);
      resolve(data);
    })
    .catch(error => {
      // console.log('request failed', error);
      reject(error);
    });
};

export default fetch;
export { fetchUrl, parseJSON, checkStatus };
