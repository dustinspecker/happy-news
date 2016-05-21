'use strict'

const getRandomNumber = max =>
  Math.floor(Math.random() * max)

const getRandomItem = array =>
  array[getRandomNumber(array.length)]

const getAHappyComment = () =>
  getRandomItem(window.happyComments)

const getAHappyUsername = () =>
  getRandomItem(window.happyUsernames)

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
