const bananaImage = document.getElementById('bananaImage')
const clickCountElement = document.getElementById('clickNumber')
let bananas = 0

bananaImage.addEventListener('click', () => {
    // Increment the cookie count
    bananas++
    // Update the display or send a request to the server
    clickCountElement.textContent = bananas
    console.log('Banans:', bananas)

if(bananas === 10){
    bananaImage.src = "images/PeeledBanaCat.png";
}

})