const {Router}=require('express')
const {getInstalaciones}=require('../controllers/controllers')

const router=Router()

//mostrar Index
router.get('/')

//mostrar Cursos

//mostrar instalaciones
router.get('/instalaciones',getInstalaciones)

//muestra una sola instalacion
router.get('/instalaciones/:id',(req,res)=>{
    res.json({
        ok:true,
        msg:'se visualizan una sola instalacion'
    })
})

//mostrar crear instalaciones
router.get('/crear',(req,res)=>{
    res.json({
        ok:true,
        msg:'se visualizan para poder crear instalaciones'
    })
})

//crear instalaciones 
router.post('/crear',(req,res)=>{
    res.json({
        ok:true,
        msg:'aca se crean las instalaciones'
    })
})


//mostrar el actualizador de instalaciones
router.get('/actualizar',(req,res)=>{
    res.json({
        ok:true,
        msg:'se visualizan para poder actualizar las instalaciones'
    })
})


//actualizar instalaciones
router.put('/actualizar',(req,res)=>{
    res.json({
        ok:true,
        msg:'aca se actualizan las instalaciones'
    })
})


//mostrar el eliminador de instalaciones 
router.get('/eliminar',(req,res)=>{
    res.json({
        ok:true,
        msg:'aca se eliminan las instalaciones'
    })
})


//eliminar instalaciones
router.delete('/eliminar',(req,res)=>{
    res.json({
        ok:true,
        msg:'aca se eliminan las instalaciones'
    })
})


module.exports=router