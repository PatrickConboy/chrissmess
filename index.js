const form = document.querySelector('form#flickForm')

const createSpanLi = function (flickItem, heroItem) {
	const list = document.querySelector('#flicks')
	const item = document.createElement('li')

	const flickSpan = document.createElement('SPAN')
	flickSpan.append(flickItem)
	changeSpanColor(flickSpan, 'blue')

	const heroSpan = document.createElement('SPAN')
	heroSpan.append(heroItem)
	changeSpanColor(heroSpan, 'red')

	item.append(flickSpan)
	item.append(' ')
	item.append(heroSpan)
	list.appendChild(item)
}

const changeSpanColor = function (span, color) {
	span.style.color = color
}

const updateFlickList = function (ev) {
	ev.preventDefault()
	const f = ev.target

	// const flickSpan = document.getElementByClassName('.flick')
	// const heroSpan = document.getElementByClassName('.hero')
	// flickSpan.style.color = 'blue'
	// heroSpan.style.color = 'red'



	const flickItem = f.flickName.value
	const heroItem = f.favoriteSuperHero.value
	createSpanLi(flickItem, heroItem)

	f.reset()
}

// create element span - put text of item into the span - then append the span to the item

form.addEventListener('submit', updateFlickList)