const express = require('express')
const router = express.Router()

const{getCursos,getCurso,postCurso,putCurso, deleteCurso}=require('../controllers/backControllers')

//ruta para conectar con el front

//llamar info Cursos
router.get('/cursos', getCursos)
//llamar info Curso
router.get('/curso/:id', getCurso)
//enviar info, crearCurso
router.post('/enviar', postCurso)
//modificar, actualizarCurso
router.put('/actualizar/:id', putCurso)
//eliminarCurso
router.delete('/eliminar/:id', deleteCurso)


module.exports = router