const button = document.querySelector('button')

const updateText = function() {
    const heading = document.querySelector('#pageTitle')
    heading.textContent = "Chris-a-palooza"
}

button.onclick = updateText