import express from 'express'
const go = express()

go.get('/', (req, res) => {
    res.send('Hello! Is it me you\'re lookign for..?')
})

go.listen(3105, function () {
    console.log('listening')
})