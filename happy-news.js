'use strict'

const getRandomNumber = max =>
  Math.floor(Math.random() * max)

const happyComments =
  [ 'Awesome job! Keep it up!'
  , 'Genius idea!'
  , 'I love seeing people try stuff like this!'
  , 'I love this!'
  , 'I\'m showing this to all of my coworkers!'
  , 'Take my money!'
  , 'This is incredible!'
  , 'Truly inspiring!'
  , 'You rock!'
  , 'Whoa!'
  ]

const happyUsernames =
  [ 'Batman'
  , 'HarryPotterFan'
  , 'LovesEverything'
  , 'ProudParent'
  , 'Robin'
  , 'Skywalker'
  , 'Spiderman'
  , 'YourFavoriteLanguageIsAwesome'
  ]

const getRandomItem = array =>
  array[getRandomNumber(array.length)]

const getAHappyComment = () =>
  getRandomItem(happyComments)

const getAHappyUsername = () =>
  getRandomItem(happyUsernames)

document.addEventListener('DOMContentLoaded', () => {
  const comments = document.querySelectorAll('.comment-tree .comment span')
  for (let i = 0; i < comments.length; i++) {
    comments[i].innerHTML = getAHappyComment()
  }

  const commentAuthors = document.querySelectorAll('.comment-tree .comhead > a')
  for (let j = 0; j < commentAuthors.length; j++) {
    commentAuthors[j].innerHTML = getAHappyUsername()
  }
})
