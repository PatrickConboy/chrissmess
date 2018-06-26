const button = document.querySelector('button')
const updateText = function() {
    const heading = document.querySelector('#pratt')
    heading.textContent = "Chris Pratt is #1 Chris"
}
button.onclick = updateText

const frm1 = document.querySelector('#frm1')
function formFunction() {
    const heading = document.querySelector('#pageTitle')
    heading.textContent = document.querySelector('.textV').value
    event.preventDefault()
}
frm1.addEventListener('submit', formFunction)

