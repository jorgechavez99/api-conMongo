const {Router}=require('express')
const {getInstalaciones,postCrearInstalaciones}=require('../controllers/controllers')

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


//crear instalaciones 
router.post('/crear',postCrearInstalaciones)


//actualizar instalaciones
router.put('/actualizar',(req,res)=>{
    res.json({
        ok:true,
        msg:'aca se actualizan las instalaciones'
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