/*
- Each PHOTO POST has:
  - ID
  - URL(photos/{{i}}.jpg) - where 'i' is 1-25 (unique)
  - DESCRIPTION (come up by yourself)
  - LIKES ( random amount from 15 to 200)
  - COMMENTS (an array of objects - a list of comments. the amount of comments is random from 0 - 5. Text is also generated)
    - each has an ID (random - from 001-999)
    - each han an AVATAR (`img/avatar-{{случайное число от 1 до 6}}.svg`)
    - for comments TEXT:
      Всё отлично!
      В целом всё неплохо. Но не всё.
      Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
      Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
      Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
      Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!
    - AUTHORs NAMEs - random
    {
      id: 135,
      avatar: 'img/avatar-6.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Артем',
    }
- Each object is PHOTO DESCRRIPTION published by an USER
- Create an array of 25 generated objects

let posts = [
  {
    id: 13,
    url: "photos/1.jpg"
    desc: "My trip to Wakanda."
    likes: 87,
    comments: [
      {
        id: 135,
        avatar: 'img/avatar-6.svg',
        message: 'В целом всё неплохо. Но не всё.',
        name: 'Артем',
      }
    ]
  }
]

*/

const PHOTO_POST_COUNT = 25;

const POST_DESCRIPTION_LIST = [
  'В жизни каждого человека есть радостные мгновения, которые хочется навсегда сохранить в памяти.',
  'Безусловно, лучшие моменты весёлого приключения хочется запечатлеть на фотоаппарат, чтобы сохранить надолго в памяти.',
  'Рассматривая снимок, погружаешься в атмосферу тёплых летних дней, проведённых с друзьями.',
  'Фотографии помогают на мгновение остановить время — надолго сохранить в памяти моменты, связанные с приятными событиями.'

];
const POST_COMMENT_LIST = [
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Главное - верить в себя. Мнение окружающих меняется ежедневно',
];

const USER_LIST = [
  'Андрей',
  'Виталий',
  'Екатерина',
  'Михаил',
  'Иван',
];

// Funtions Helpers

const getRandomInt = (min, max) => {
  if (max <= min) {
    return 'Максимальное значени должно быть больше минимального.';
  } else if (min >= 0 && max >= 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  return 'Диапазон может быть только положительный, включая ноль.';
};

const isGreaterThanMaxStringLength = (input, max) => {
  if (typeof input === 'string' || input instanceof String) {
    return input.length <= max;
  }
  return 'Введен неверный формат данных.';
};

// Posts Creation Functions

const getRandomArrayElement = elements => {
  return elements[getRandomInt(0, elements.length - 1)];
}

const createComment = (id) => {
  return {
    id: id,
    avatar: `img/avatar-${getRandomInt(0,6)}.svg`,
    message: getRandomArrayElement(POST_COMMENT_LIST),
    name: getRandomArrayElement(USER_LIST),
  }
}

const getPosts = (PHOTO_POST_COUNT) => new Array(PHOTO_POST_COUNT).fill(null).map(() => createPost(getRandomInt(0,PHOTO_POST_COUNT)));

const createPost = (id) => {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    desc: getRandomArrayElement(POST_DESCRIPTION_LIST),
    likes: getRandomInt(14, 201),
    comments: new Array(getRandomInt(0,6)).fill(null).map(() => createComment(id)),
  };
};
console.log(getPosts(PHOTO_POST_COUNT))

// const getPosts = new Array(PHOTO_POST_COUNT).fill(null).map(() => createPost());


