const bananaImage = document.getElementById('bananaImage')
let bananas = 0

bananaImage.addEventListener('click', () => {
    // Increment the cookie count
    bananas++
    // Update the display or send a request to the server
    console.log('Banans:', bananas)
})