require('dotenv').config()

const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('twitter user name')
})

app.get('/login',(req,res)=>{
    res.send('<h1>This is a heading</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Chai aur Code</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})