const URL = 'https://22.javascript.pages.academy/kekstagram';

const getDataAsync = async (onSuccess, onFail) => {
  try {
    const result = await fetch(`${URL}/data`);
    const json = await result.json()
    onSuccess(json)
  } catch (error) {
    onFail(alert('При загрузке данных с сервера произошла ошибка'));
  }
}

const sendDataAsync = async (onSuccess, onFail, data) => {
  const updates = {
    method: 'POST',
    data,
  };
  try {
    const result = await fetch(URL, updates);
    const json = await result.json();
    onSuccess(json)
  } catch (error) {
    onFail();
  }    
}

export { getDataAsync, sendDataAsync }