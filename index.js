const form = document.querySelector('form#flickForm')

const createLi = function(listItem) {
	const list = document.querySelector('#flicks')
	const item = document.createElement('li')
	item.textContent = listItem
	list.appendChild(item)
}

const updateFlickList = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const listItem = f.flickName.value

  createLi(listItem)

  f.reset()
}

form.addEventListener('submit', updateFlickList)