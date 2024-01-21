const express=require('express');

require('dotenv').config() 

const app= express();

const port=process.env.PORT || 5000;

const {connection} = require('./utils/connections');


//Nos permite trabajar con formularios enriquecidos
app.use(express.urlencoded({extended:false}))

//Nos permite trabajar con aplicaciones JSON
app.use(express.json())

connection()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use('/api/v1',require('./routers/apiRouter'))


app.listen(port,()=>{
    console.log(`Se establecio conexion con el servidor ${port}`)
})
