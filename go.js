import express from 'express'
const go = express()

go.get('/', (req, res) => {
    res.send('<h1>Oktai ti si mnogo sladuk! ❤️</h1>')
})

go.listen(process.env.PORT || 3105, function () {
    console.log('listening')
})