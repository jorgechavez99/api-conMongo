const mongoose = require('mongoose')
const {Schema, model} = mongoose

const cursoSchema = new Schema({
    curso: String,
    descripcion: String
})

module.exports = model('curso', cursoSchema)