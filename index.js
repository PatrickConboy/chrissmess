const button = document.querySelector('button') //create variable that calls our button
const updateText = function() {
    const heading = document.querySelector('#pratt') //create variable that calls the Chris Pratt header
    heading.textContent = "Chris Pratt is #1 Chris" //changes the text of Chris Pratt header
}
button.onclick = updateText //when button is clicked call updateText


const frm1 = document.querySelector('#frm1') //create variable that calls our form
function formFunction() {
    const heading = document.querySelector('#pageTitle') //create value that calls the page header
    heading.textContent = document.querySelector('.textV').value //change text of header with forms text line
    event.preventDefault() //stops page from refreshing after submit
}
frm1.addEventListener('submit', formFunction) //event listener to detect submit and call formFunction

