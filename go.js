import express from 'express'
const go = express()

go.get('/', (req, res) => {
    res.send('<h1 style="text-align: center; font-size: 10rem; display: grid; place-items: center; height: 100vh;">Дарба карта включи!<br>Максимум пирус!🔥</h1>')
})

go.listen(process.env.PORT || 3105, function () {
    console.log('listening')
})