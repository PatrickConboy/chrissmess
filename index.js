const form = document.querySelector('form#flickForm')  // select my form element and assign a variable

// This function takes the strings entered in my text fields, 
// puts them into spans, changes their color/font, and then
// appends them to the list.
const createSpanLi = function (flickItem, heroItem)  {
	const list = document.querySelector('#flicks')
	const item = document.createElement('li')

	// This block fo code creates a span, puts our flick text into it, and styles it.
	const flickSpan = document.createElement('SPAN')
	flickSpan.append(flickItem)
	changeSpanColor(flickSpan, 'blue')
	flickSpan.style.fontFamily = 'Comic Sans MS, cursive, sans-serif'
	flickSpan.style.fontSize = '50px'

	// This block of code creates a span, puts our hero text into it, and styles it.
	const heroSpan = document.createElement('SPAN')
	heroSpan.append(heroItem)
	changeSpanColor(heroSpan, 'red')
	heroSpan.style.fontFamily = 'Comic Sans MS, cursive, sans-serif'
	heroSpan.style.fontSize = '50px'

	// This block of code simply takes our created spans and puts them in our list, with a space between.
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
const updateFlickList = function (ev) {
	
	ev.preventDefault() // Stops page from refreshing when form is submitted. Form submit refreshes page by default.
	const f = ev.target // This line targets our event (form) and gives it a variable that we can call on.

	// This block of code obtains the text entered into our flick and hero fields.
	// It then calls createSpanLi() to put our text into spans and append them to a list to be displayed.
	const flickItem = f.flickName.value
	const heroItem = f.favoriteSuperHero.value
	createSpanLi(flickItem, heroItem)

	f.reset()
}

// This event listener calls our updateFlickList function when our form's submit
// button is clicked.
form.addEventListener('submit', updateFlickList)