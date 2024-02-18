const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('src/public'))

app.get('/', (req, res) => {
    const options = {
        root: path.join(__dirname, 'views') // Specify the 'views' directory
    };

    const fileName = 'index.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.error('Error sending file:', err)
        } else {
            console.log('Sent:', fileName)
        }
    })
})

app.listen(port, () => {
    console.log("Server listening on PORT", port)
})