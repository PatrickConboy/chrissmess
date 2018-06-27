const form = document.querySelector('form#flickForm')

const createLi = function(flickItem, heroItem) {
	const list = document.querySelector('#flicks')
	const item = document.createElement('li')
	item.textContent = flickItem + ' ' + heroItem
	list.appendChild(item)
}

const updateFlickList = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickItem = f.flickName.value
  const heroItem = f.favoriteSuperHero.value
  createLi(flickItem, heroItem)

  f.reset()
}

form.addEventListener('submit', updateFlickList)