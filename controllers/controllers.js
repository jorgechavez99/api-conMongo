const Curso = require('../models/cursoModel')
const Instalacion =require('../models/instalacionModel')


// este es el index

const getIndex = (req, res) => {
    res.render('index')
}

//esta es mostrarCursos

const mostrarCursos = async(req, res) => {
    try {
        const cursos = await Curso.find()
        res.render('cursos',{cursos})
        
    } catch (error) {
        console.log("error", error)
        //gestionar las excepciones
    }
}


//mostrar Instalaciones

const getInstalaciones =async (req, res) => {
   try {
    const instalaciones = await Instalacion.find()
    console.log(instalaciones)
    res.status('200').json({
        ok:true,
        msg:'visualizando instalaciones',
        instalaciones
    })
   } catch (error) {
    res.status('500').json({
        ok:false,
        msg:'comuniquese con el administrador'
    })
   }
}

// mostrar crear Instalacion
const getCrear = (req, res) => {
    res.render('crear')
}

// crear Instalacion

const postCrearInstalaciones = async(req,res)=>{
   
    const {titulo,descripcion}= req.body
    const instalaciones= new Instalacion({
        titulo,
        descripcion
    })

try {
   const instalacion = await instalaciones.findOne({titulo})
if (instalacion) {
    return res.status('404').json({
        ok:false,
        msg:'ya existe una titulo con esos datos'
    })
}
 const guardarInstalacion= await instalaciones.save()
 return res.status('201').json({
    ok:true,
    guardarInstalacion
 })

} catch (error) {
 return res.status('500').json({
    ok:false,
    msg:'comuniquese con el administrador'
 })
 
   
}



}

//mostrar para Actualizar instalaciones

const getActualizar = (req, res) => {
    res.render('actualizar')
}


//Actualizar instalaciones



// Mostrar para eliminar Instalaciones
const getEliminar = (req, res) => {
    res.render('eliminar')
}


// Elimiar Instalaciones





module.exports = {
    
    getInstalaciones,
  
}