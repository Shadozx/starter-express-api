const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Hello! My name is Roman!')
})
app.listen(process.env.PORT || 3000)
