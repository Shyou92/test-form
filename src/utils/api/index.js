const BASE_URL = 'http://api.infy-corp.com/react-api/test/get-user';

function responce(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(
      new Error(`Ошибка ${res.status} - ${res.statusText}`)
    );
  }
}

export const getData = () => {
  return fetch(BASE_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(responce)
    .catch((err) => console.log(`Ошибка ${err.status} : ${err.message}`));
};
