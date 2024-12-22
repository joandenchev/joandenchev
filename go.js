import express from 'express'
const go = express()

go.get('/', (req, res) => {
    res.send('<h1>Дарба карта включи! \n Максимум пирус!</h1>')
})

go.listen(process.env.PORT || 3105, function () {
    console.log('listening')
})