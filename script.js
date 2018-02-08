var todos = []

var newTodo = 0
var r = 0
var g = 0
var b = 0
var done = false

function rgb () {
  r = (Math.floor(Math.random() * 156) + 100)
  b = (Math.floor(Math.random() * 156) + 100)
  g = (Math.floor(Math.random() * 156) + 100)
}

function colors () {
  rgb()
  newTodo.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
}

window.onload = function () {
  rgb()
  document.querySelector('h1').style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
  rgb()
  document.querySelector('form').style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
}

function displayTodos () {
  newTodo = document.createElement('div')
  var newTodoText = document.createTextNode(todos[todos.length - 1])
  newTodo.appendChild(newTodoText)
  document.body.insertBefore(newTodo, document.querySelector('form'))
  colors()
  markAsDone()
  deleteButton()
}

function markAsDone () {
  newTodo.addEventListener('click', function (event) {
    if (done === false) {
      event.target.style.textDecoration = 'line-through'
      event.target.style.opacity = '0.5'
      done = true
    } else {
      event.target.style.textDecoration = 'none'
      event.target.style.opacity = '1'
      done = false
    }
  })
}

function deleteButton () {
  var deleteButton = document.createElement('img')
  var deleteImg = document.createAttribute('src')
  deleteImg.value = 'delete-icon.svg'
  deleteButton.setAttributeNode(deleteImg)
  newTodo.insertBefore(deleteButton, document.querySelector('.newTodo'))
  deleteButton.addEventListener('click', function (event) {
    var target = event.target
    var parent = target.parentElement
    parent.parentNode.removeChild(parent)
  })
}

document.querySelector('#addTodo').addEventListener('submit', function (e) {
  e.preventDefault()
  todos.push(document.querySelector('#addTodoText').value)
  document.querySelector('#addTodoText').value = ''
  displayTodos()
})
