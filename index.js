const button = document.querySelector('button')

const updateText = function() {
    const heading = document.querySelector('#pratt')
    heading.textContent = "Chris Pratt is #1 Chris"
}

button.onclick = updateText