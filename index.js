import express from 'express'

const app=express();

app.get('/',(req,res)=>{
    res.send('Hmmmmmmm ')
})

app.listen(3005,"0.0.0.0",()=>{
    console.log('Server is Running')
})