const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/code-and-magick/data')
    .then((response) => response.json())
    .then((wizards) => {
      onSuccess(wizards);
    });
};

export { getData }