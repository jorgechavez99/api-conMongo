const Curso = require('../models/cursoModel')
const Instalacion = require('../models/instalacionModel')


// este es el index

const getIndex = (req, res) => {
    res.render('index')
}

//esta es mostrarCursos

// const mostrarCursos = async (req, res) => {
//     try {
//         const cursos = await Curso.find()
//         res.render('cursos', { cursos })

//     } catch (error) {
//         console.log("error", error)
//         //gestionar las excepciones
//     }
// }


//mostrar Instalaciones

const getInstalaciones = async (req, res) => {
    try {
        const instalaciones = await Instalacion.find()
        console.log(instalaciones)
        res.status('200').json({
            ok: true,
            msg: 'visualizando instalaciones',
            instalaciones
        })
    } catch (error) {
        return res.status('500').json({
            ok: false,
            msg: 'comuniquese con el administrador'
        })
    }
}


// crear Instalacion

const postCrearInstalaciones = async (req, res) => {
    const crear = new Instalacion(req.body)
    try {

        const crearInstalacion = await crear.save()
        console.log(crearInstalacion)
        return res.status('201').json({
            ok: true,
            msg: 'se esa creando una instalacion',
            crearInstalacion,

        })

    } catch (error) {

        return res.status('500').json({
            ok: false,
            msg: 'comuniquese con el administrador',
        })
    }
}


//Actualizar instalaciones



// Elimiar Instalaciones





module.exports = {

    getInstalaciones,
    postCrearInstalaciones

}