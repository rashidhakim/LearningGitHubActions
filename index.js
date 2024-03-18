const express = require('express')

const app = express();


app.get('/',(req,res)=>{
    res.send('health check ok')
})

app.listen(3000)