const form = document.querySelector('form#flickForm')

const createSpanLi = function (flickItem, heroItem) {
	const list = document.querySelector('#flicks')
	const item = document.createElement('li')

	const flickSpan = document.createElement('SPAN')
	flickSpan.append(flickItem)
	changeSpanColor(flickSpan, 'blue')
	flickSpan.style.fontFamily = 'Comic Sans MS, cursive, sans-serif'
	flickSpan.style.fontSize = '50px'

	const heroSpan = document.createElement('SPAN')
	heroSpan.append(heroItem)
	changeSpanColor(heroSpan, 'red')
	heroSpan.style.fontFamily = 'Comic Sans MS, cursive, sans-serif'
	heroSpan.style.fontSize = '50px'

	item.append(flickSpan)
	item.append('   ')
	item.append(heroSpan)
	list.appendChild(item)
}

const changeSpanColor = function (span, color) {
	span.style.color = color
}

const updateFlickList = function (ev) {
	ev.preventDefault()
	const f = ev.target

	const flickItem = f.flickName.value
	const heroItem = f.favoriteSuperHero.value
	createSpanLi(flickItem, heroItem)

	f.reset()
}

form.addEventListener('submit', updateFlickList)