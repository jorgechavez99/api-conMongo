const Curso = require('../models/cursoModel')


const getCursos = async (req, res) => {
    try {
        const cursos = await Curso.find();

        if (!cursos) {
            return res.status(404).json({
                error: true,
                msg: 'No se encontraron cursos'
            });
        }
        return res.status(200).json({
            error: false,
            cursos
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            msg: 'Error al intentar obtener los cursos',
            error
        });
    }
}

const getCurso = async (req, res) => {
    try {
        const cursoId = req.params.id


        const curso = await Curso.findOne({ _id: cursoId })

        if (!curso) {
            return res.status(404).json({
                error: true,
                msg: 'No existe el curso'
            })
        }

        return res.status(200).json({
            error: false,
            curso
        })
    } catch (error) {
        return res.status(500).json({
            error: true,
            msg: 'Error al intentar obtener el curso'
        })
    }
}

const postCurso = async (req, res) => {
    const cursoEnviado = new Curso(req.body)
    const { curso } = cursoEnviado
    try {

        const cursoNuevo = await Curso.findOne({ curso })
        if (cursoNuevo) {
            return res.status(409).json({
                error: true,
                msg: `El curso '${curso}' ya existe`
            })
        }

        const cursoGuardado = await cursoEnviado.save()
        return res.status(201).json({
            error: false,
            cursoGuardado
        })
    } catch (error) {
        return res.status(500).json({
            error: true,
            msg: 'Error al intentar crear el curso'
        })
    }

}

const putCurso = async (req, res) => {

    const cursoId = req.params.id
    const nuevoDato = req.body

    try {
        const cursoActualizado = await Curso.findOneAndUpdate({ _id: cursoId }, nuevoDato, {new: true})
        
        if (!cursoId) {
            return res.status(404).json({
                error: true,
                msg: 'No existe el curso'
            })
        }

        return res.status(200).json({
            error: false,
            cursoActualizado
        });


    } catch (error) {
        return res.status(500).json({
            error: true,
            msg: 'Error al intentar actualizar el curso'
        })
    }

}

const deleteCurso = async(req, res) => {
    const cursoId = req.params.id
    try {
        const cursoEliminado = await Curso.findOneAndDelete({ _id: cursoId })

        if (!cursoEliminado) {
            return res.status(404).json({
                error: true,
                msg: 'Curso no encontrado'
            })
        }

       return res.status(200).json({
            error: false,
            msg: 'Curso eliminado',
            cursoEliminado
        })
    } catch (error) {
        return res.status(500).json({
            error: true,
            msg: 'Error al intentar eliminar el curso'
        })

    }
}

module.exports = {
    getCursos,
    getCurso,
    postCurso,
    putCurso,
    deleteCurso
}