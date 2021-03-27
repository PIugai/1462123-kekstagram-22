const URL = 'https://22.javascript.pages.academy/kekstagram';

const getData = (onSuccess, onFail) => {
  fetch(`${URL}/data`)
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      onFail()
      alert('При загрузке данных с сервера произошла ошибка');
    });
}

const sendData = async (onSuccess, onFail, data) => {
  fetch(
    URL,
    {
      method: 'POST',
      data,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
}

export { getData, sendData }