const URL = 'https://22.javascript.pages.academy/kekstagram';

const getDataAsync = async (onSuccess, onFail) => {
  try {
    const result = await fetch(`${URL}/data`);
    const json = await result.json()
    onSuccess(json)
  } catch (error) {
    onFail();
    alert('При загрузке данных с сервера произошла ошибка')
  }
}

const sendDataAsync = async (onSuccess, onFail, data) => {
  fetch(URL,
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
    .catch(() => onFail());
}

export { getDataAsync, sendDataAsync }