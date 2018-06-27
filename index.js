const form = document.querySelector('form#flickForm')

const updateFlickList = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value

  const list = document.querySelector('#flicks')
  const item = document.createElement('li')
  item.textContent = flickName
  list.appendChild(item)

  f.reset()
}

form.addEventListener('submit', updateFlickList)