var todos = []

var newTodo = 0
var r = 0
var g = 0
var b = 0
// var lines = document.querySelectorAll('.newTodo')
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
  // newTodo.addEventListener('mouseover', function (){
  //   deleteButton.style.display = "none"
  // })
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
  var deleteButton = document.createElement('span')
  deleteButton.innerHTML = '<button class="fas fa-minus-circle"></button>'
  newTodo.insertBefore(deleteButton, document.querySelector('.newTodo'))
  deleteButton.addEventListener('click', function (event) {
    var target = event.target
    var parent = target.parentElement
    var ultraParent = parent.parentElement
    var doubleUltraParent = ultraParent.parentElement
    doubleUltraParent.parentNode.removeChild(doubleUltraParent)
  })
}

document.querySelector('#addTodo').addEventListener('submit', function (e) {
  e.preventDefault()
  todos.push(document.querySelector('#addTodoText').value)
  document.querySelector('#addTodoText').value = ''
  displayTodos()
})
