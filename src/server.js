const express = require('express')
const app = express()
const port = 3000

app.use(express.static('src/public'))

app.get('/', (req, res) => {
    const fileName = 'index.html'
    res.sendFile(fileName, 'src/views/index.html', function (err) {
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