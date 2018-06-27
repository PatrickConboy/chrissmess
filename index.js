// class App {
// 	constructor() {
// 		const form = document.querySelector('form#flickForm')
// 		form.addEventListener('submit', handleSubmit)
// 	}
// }

// const app = new App()

const form = document.querySelector('form#flickForm')  // select my form element and assign a variable

// This function takes the strings entered in my text fields, 
// puts them into spans, changes their color/font, and then
// appends them to the list.
const createSpanLi = function (flickItem, heroItem)  {
	const list = document.querySelector('#flicks')
	const item = document.createElement('li')

	const flickSpan = document.createElement('SPAN')
	flickSpan.append(flickItem)
	changeSpanColor(flickSpan, 'green')

	const heroSpan = document.createElement('SPAN')
	heroSpan.append(heroItem)
	changeSpanColor(heroSpan, 'black')

	item.append(flickSpan)
	item.append('   ')
	item.append(heroSpan)
	list.appendChild(item)
}

// This function takes a span and color and changes the span to the given color.
const changeSpanColor = function (span, color) {
	span.style.color = color
}

// This function takes our form and displays the text entered in our
// text fields in a list format, with the help of a few other functions.
// Namely: changeSpanColor() and createSpanLi()
const handleSubmit = function (ev) {
	
	ev.preventDefault() 
	const f = ev.target 

	// const flick = {
	// 	name: f.flickName.value,
	// 	hero: f.chrisName.value
	// }

	// const item = renderItem(flick)

	// const list = document.querySelector('#flicks')
	// list.appendChild(item)

	const flickItem = f.flickName.value
	const heroItem = f.favoriteSuperHero.value
	createSpanLi(flickItem, heroItem)

	f.reset()
	f.flickName.focus()
}

// This event listener calls our updateFlickList function when our form's submit
// button is clicked.
form.addEventListener('submit', handleSubmit)